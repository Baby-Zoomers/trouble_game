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
        this.host.emit('myTurn', {myTurn: true});

        // or maybe some other stuff? idk
        // depends on what gameService needs ig
    }

    async addPlayer(id, playerSocket) {
        let color = this.colors.pop();
        this.players[id] = { socket: playerSocket, color };
        this.setDiceEvent(playerSocket);
        this.setMoveEvent(playerSocket);
        GameService.handlejoinGame({ name: id, color}, this.gameId);
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
        socket.on('move', (info) => {
            const { piece } = info;
            console.log('asking to move, info provided: ', info)

            const newBoard = GameService.handleMovePiece(this.gameId, piece);

            Object.values(this.players).forEach((player) => {
                player.socket.emit('move', newBoard);
                player.socket.emit('currentPlayer', false);
            });

        });
    }
}

module.exports = GameRoom