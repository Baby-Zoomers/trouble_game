const express = require('express');
const path = require('path');

const http = require('http');
const socket = require('./socket/socketManager');

const app = express();
const server = new http.Server(app);
socket(server);


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../trouble_client/build')));

/**
 * Returns the string "hello world"
 * @returns {string} "hello world"
 */
function get_hello(){
    return "hello world";
}

/**
 * Get Hello World Message
 *
 * @name Hello World
 * @path {GET} /api/hello
 * @response {String} "hello world" message
 * @code {200} if the request is successful
 * @code {500} if server dies
 */
app.get('/api/hello', (req, res) => {

  const hello_text = {'text': get_hello()}

  res.json(hello_text);

  console.log(`Sent hello world`);
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