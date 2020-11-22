const database = require('./model/database')
const pieces = require('./model/piece')
let Piece = pieces.Piece

class playerDTO {
    constructor (name, color) {
        this.name = name
        this.color = color
    } 
}

const handleDiceRoll = (gameID) => {
    let currentGame = database.gameList[gameID]
    let rollResult = currentGame.rollDice()
    // socketManager.sendRollResult(rollResult)
    return rollResult
}


const handleMovePiece = (gameID, piece) => {
    let currentGame = database.gameList[gameID]
    currentGame.movePiece(piece)
    var currentPlayer = currentGame.getPlayer()
    if (currentGame.getDice() !== 6) {
        currentPlayer = currentGame.updateTurn()
    }
    let currentPlayerDTO = new playerDTO (currentPlayer.name, currentPlayer.color)
    //socketManager.sendNextTurn(currentPlayerDTO)
    return currentPlayerDTO
}

const handlejoinGame = (player, gameID) => {
    let currentGame = database.gameList[gameID]
    name = player.name
    color = player.color
    currentGame.addUser(name, color)
    console.log('New user ' + name + 'has been created with color ' + color)

}

var testPiece = new Piece('blue', 1, 1,1)
console.log(handleDiceRoll(0))
console.log(handleMovePiece(0, testPiece))
console.log(handleMovePiece(0, testPiece))
console.log(handleMovePiece(0, testPiece))

module.exports = {
    //property name: function name
    handleDiceRoll: handleDiceRoll,
    handleMovePiece: handleMovePiece,
    handlejoinGame: handlejoinGame,
    playerDTO: playerDTO
}
