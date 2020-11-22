const game = require('./game')
let Game = game.Game

var gameList = new Array()
var playerList = new Array()

const testGame = new Game(0)

testGame.addUser('Jordan', 'blue')
testGame.addUser('Sam', 'yellow')
testGame.addUser('Sim', 'red')
testGame.addUser('Yiwei', 'green')

// console.log(testGame.userList[0].pieces[0].initPosition)
// console.log(testGame.rollDice())


gameList.push(testGame)

module.exports.gameList = gameList


module.exports = {
    //property name: function name
    gameList: gameList,
    playerList: playerList
}
