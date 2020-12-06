const game = require('./game')
let Game = game.Game

var gameList = new Array()
var playerList = new Array()



/**
 * Hardcode a gamelist
 */

const testGame = new Game(0)
// testGame.addUser('Jordan', 'blue')
// testGame.addUser('Sam', 'yellow')
// testGame.addUser('Sim', 'red')
// testGame.addUser('Yiwei', 'green')
gameList.push(testGame)
module.exports = {
    //property name: function name
    gameList: gameList,
    playerList: playerList
}
