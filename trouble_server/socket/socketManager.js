const socketio = require('socket.io');
const GameRoom = require('./gameRoom');

const socket = (app) => {
    const io = socketio(app);
    const rooms = {}; // game_id: {player_id: {player atts?}}?

    io.on('connection', async socket => {
        console.log('connection was established!');
        const { gameId } = socket.handshake.query;
        let newGameId = gameId;
        if (gameId == undefined) {
            newGameId = 0;
        }

        socket.gameid = gameId;

        const gameRoom = new GameRoom({ io, socket, gameId: newGameId });
        const gameJoined = await gameRoom.init();
    });
}

module.exports = socket;