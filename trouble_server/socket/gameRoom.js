const { GameNotFoundError }  = require('./../errors/gameNotFoundError');
const GameService = require('./../game/gameService');

class GameRoom {

    colors = ['blue', 'yellow', 'green', 'red'];

    constructor(options) {
        this.io = options.io; // Shortname for -> io.of('/your_namespace_here')
        this.host = options.socket;
        this.gameId = options.gameId;
        this.players = {};
    }

    async init() {
        console.log('initing');
        const success = await this.addPlayer(this.host.handshake.query.name, this.host);
        if (success) {
            this.host.emit('myTurn', { myTurn: true, canRoll: true });
            return true
        } else {
            return false;
        }
    }

    async addPlayer(id, playerSocket) {
        if (this.players[id]) {
            playerSocket.emit('error', {
                message: "Player with that name already is in game",
                type: "PlayerNameCollision"
            })
            return false;
        }
        let color = this.colors.pop();
        if (color == null) {
            playerSocket.emit('error', {
                message: "Player count has exceeded for game " + this.gameId,
                type: "PlayerCountExceeded"
            })
            return false;
        }
        this.players[id] = { socket: playerSocket, color };
        this.setDiceEvent(playerSocket);
        this.setMoveEvent(playerSocket);
        try {
            GameService.handlejoinGame({ name: id, color}, this.gameId);
            const {board, currentPlayer} = GameService.accessGameState(this.gameId);
            Object.values(this.players).forEach((player) => {
                player.socket.emit('newMove', {board: board});
                player.socket.emit('currentPlayer', currentPlayer);
            });
            return true;
        } catch (err) {
            if (err instanceof GameNotFoundError) {
                console.log("sending GameNOtFoundError");
                playerSocket.emit('error', {
                    message: err.message,
                    type: "GameDoesNotExist"
                })
            }
        }
        return false;
    }

    async removePlayer(id) {
        const { color } = this.players[id];
        this.colors.push(color);
        delete this.players[id];
        GameService.handleRemovePlayer({name: id, color: color}, this.gameId);

        const remainingPlayers = Object.keys(this.players).length;
        if (remainingPlayers == 0) {
            GameService.handleCloseGame(this.gameId);
        }
        return remainingPlayers;
    }

    setDiceEvent(socket) {
        socket.on('rollDice', () => {
            socket.emit('rollResult', GameService.handleDiceRoll(this.gameId));
        });
    }

    setMoveEvent(socket) {
        socket.on('movePiece', (piece) => {
            console.log('asking to move, info provided: ', piece)

            GameService.handleMovePiece(this.gameId, piece);
            
            // Update game state
            const { board, currentPlayer } = GameService.accessGameState(this.gameId);
            Object.values(this.players).forEach((player) => {
                player.socket.emit('myTurn', {myTurn: false, canRoll: false});
                player.socket.emit('newMove', {board});
                player.socket.emit('currentPlayer', currentPlayer);
            });

            // Check for game over
            const completedPlayer = GameService.checkCompletion(this.gameId);
            if (completedPlayer) {
                Object.values(this.players).forEach((player) => {
                    player.socket.emit('completedPlayer', {completedPlayer: completedPlayer});
                });
            } else {
                this.players[currentPlayer.name].socket.emit('myTurn', { myTurn: true, canRoll:  true});
            }

        });
    }
}

module.exports = GameRoom