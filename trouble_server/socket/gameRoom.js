// import GameService from './../game/gameService';
const GameService = require('./../game/gameService');

class GameRoom {

    constructor(options) {
        this.io = options.io; // Shortname for -> io.of('/your_namespace_here')
        this.socket = options.socket;
        this.gameId = options.gameId;
    }

    async init() {
        this.setDiceEvent();
        this.setMoveEvent();

        // or maybe some other shit? idk
    }

    setDiceEvent() {
        this.socket.on('rollDice', () => {
            this.socket.emit('rollResult', GameService.handleDiceRoll(this.gameId));
        });
    }

    setMoveEvent() {
        this.socket.on('move', (info) => {
            const { piece } = info;
            console.log('asking to move, info provided: ', info)
            this.io.sockets.in(this.room).emit('move', 
                GameService.handleMovePiece(this.gameId, piece));
        });
    }
}

module.exports = GameRoom