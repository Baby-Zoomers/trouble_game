const game = require('./game')
let Game = game.Game

var gameList = {}
let gameCount = 0

/**
 * Create a new game object
 * @returns {int} game id of new game
 */
 const createNewGame = () => {
     const newGameId = gameCount;
     gameCount++;
     const newGame = new Game(newGameId);
     gameList[newGameId] = newGame;
     return newGameId;
 }

/**
 * Removes a game from list
 * @param {int} game id which is being removed
 */
 const closeGame = (gameId) => {
     delete gameList[gameId];
 }

 const getGame = (id) =>{ return gameList[id] };
 
 const getPlayer = (id) =>{ return gameList[id] };

module.exports = {
    //property name: function name
    getGame: getGame,
    getPlayer: getPlayer,
    createNewGame: createNewGame,
    closeGame: closeGame
}
