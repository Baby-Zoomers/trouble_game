const socketio = require('socket.io');
const GameRoom = require('./gameRoom');
const rooms = {};

const socket = (app) => {
    const io = socketio(app);
    const rooms = {}; // game_id: {player_id: {player atts?}}?

    io.on('connection', async socket => {
        const { gameId, name } = socket.handshake.query;
        console.log('connection was established!', name);

        socket.gameid = gameId;

        let gameRoom = rooms[gameId];
        let gameJoined = false;
        if (!rooms[gameId]) {
            console.log('making new game room');
            gameRoom = new GameRoom({ io, socket, gameId });
            gameJoined = await gameRoom.init();
            if (gameJoined) {
                rooms[gameId] = gameRoom;
            }
        } else {
            console.log('using existing game room');
            gameJoined = await rooms[gameId].addPlayer(name, socket);
        }

        if (gameJoined) {
            socket.on('disconnect', (reason) => {
                const remainingPlayers = gameRoom.removePlayer(name);
                console.log('socket has disconnected', remainingPlayers);
                if (remainingPlayers == 0) {
                    delete rooms[gameId];
                }
            });
        }
    });
}

module.exports = socket;