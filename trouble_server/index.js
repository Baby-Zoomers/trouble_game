const express = require('express');
const path = require('path');

const http = require('http');
const socket = require('./socket/socketManager');

const GameService = require('./game/gameService');

const app = express();
const server = new http.Server(app);
socket(server);


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../trouble_client/build')));


/**
 * Create a new game in the database
 *
 * @name Create Game
 * @path {POST} /api/create/game
 * @response {Int} Id of game created
 * @code {201} if the request is successful
 * @code {500} if server dies
 */
app.post('/api/create/game', (req, res) => {

  const id = GameService.handleCreateGame();
  res.status(201);
  res.json({gameId: id});

  console.log(`Created game id ` + id.toString());
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/trouble_client/build/index.html'));
});

const port = process.env.PORT || 5000;

server.listen(port, function(){
  console.log('Trouble API listening on *:' + port);
});

module.exports = server;