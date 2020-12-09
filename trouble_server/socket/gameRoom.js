// import GameService from './../game/gameService';
const GameService = require('./../game/gameService');

class GameRoom {

    // TEMP BS
    colors = ['blue', 'yellow', 'green', 'red'];

    constructor(options) {
        this.io = options.io; // Shortname for -> io.of('/your_namespace_here')
        this.host = options.socket;
        this.gameId = options.gameId;
        this.players = {};
    }

    async init() {
        await this.addPlayer(this.host.handshake.query.id, this.host);
        this.host.emit('myTurn', {myTurn: true, canRoll: true});
        
        // or maybe some other stuff? idk
        // depends on what gameService needs ig
    }

    async addPlayer(id, playerSocket) {
        let color = this.colors.pop();
        this.players[id] = { socket: playerSocket, color };
        this.setDiceEvent(playerSocket);
        this.setMoveEvent(playerSocket);
        GameService.handlejoinGame({ name: id, color}, this.gameId);
        const {board, currentPlayer} = GameService.accessGameState(this.gameId);
        Object.values(this.players).forEach((player) => {
            player.socket.emit('newMove', {board: board});
            player.socket.emit('currentPlayer', currentPlayer);
        });
    }

    async removePlayer(id) {
        const { color } = this.players[id];
        this.colors.push(color);
        delete this.players[id];

        // make first player diff?

        return Object.keys(this.players).length;
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