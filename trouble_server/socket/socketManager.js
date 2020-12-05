const socketio = require('socket.io');
const GameRoom = require('./gameRoom');
const rooms = {};

const socket = (app) => {
    const io = socketio(app);
    const rooms = {}; // game_id: {player_id: {player atts?}}?

    io.on('connection', async socket => {
        const { gameId, id } = socket.handshake.query;
        console.log('connection was established!', id);
        let newGameId = gameId;
        if (gameId == undefined) {
            newGameId = 0;
        }

        socket.gameid = gameId;

        if (!rooms[gameId]) {
            const gameRoom = new GameRoom({ io, socket, gameId: newGameId });
            const gameJoined = await gameRoom.init();
            rooms[gameId] = gameRoom;
        } else {
            await rooms[gameId].addPlayer(id, socket);
        }

        socket.on('disconnect', (reason) => {
            const remainingPlayers = gameRoom.removePlayer(id);
            if (remainingPlayers == 0) {
                delete rooms[gameId];
            }
        });
    });
}

module.exports = socket;