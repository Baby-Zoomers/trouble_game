const database = require('./model/database')
const pieces = require('./model/piece')
let Piece = pieces.Piece

/**
 * Represents a palyer data transfer object
 * @constructor
 * @param {string} name - user name
 * @param {string} color - user color
 */
class playerDTO {
    constructor (name, color) {
        this.name = name
        this.color = color
    } 
}

class pieceDTO {
    constructor (player, space) {
        this.player = player
        this.space = space
    }
}

/**
 * Handle the dice rolling event
 * @param {number} gameID - the gameID of current game
 * @returns {number} the result of rolling dice 
 */
const handleDiceRoll = (gameID) => {
    let currentGame = database.gameList[gameID]
    let rollResult = currentGame.rollDice()
    // socketManager.sendRollResult(rollResult)
    let availablePieces = currentGame.getAvailablePieces()
    var availableMoves = []
    availablePieces.forEach(piece => {
        let currentPlayerDTO = new playerDTO(piece.player, piece.color)
        let currentPieceDTO = new pieceDTO(currentPlayerDTO, piece.position)
        availableMoves.push(currentPieceDTO)
    });
    return {
        rollResult,
        availableMoves
    }
}

/**
 * Handle the piece moving event
 * @param {number} gameID - the gameID of current game
 * @param {PieceDTO} piece - the piece which is selected to be moved
 * @return {palyerDTO} - the player for next turn
 */
const handleMovePiece = (gameID, piece) => {
    let currentGame = database.gameList[gameID]
    currentGame.movePiece(piece.space)
    var currentPlayer = currentGame.getPlayer()
    if (currentGame.getDice() !== 6) {
        currentPlayer = currentGame.updateTurn()
    }
    currentPlayer = currentGame.updateTurn()
    let currentPlayerDTO = new playerDTO (currentPlayer.name, currentPlayer.color)
    //socketManager.sendNextTurn(currentPlayerDTO)
    //console.log(currentGame.gameBoard.board)
    
    return currentPlayerDTO
}

/**
 * Handle the newMove event
 * @param {number} gameID - the gameID of current game
 * @return {pieceDTO[]} - a boardDTO represents the updated board
 */
const accessGameState = (gameID) => {
    let currentGame = database.gameList[gameID]
    let pieceArray = currentGame.gameBoard.board
    var pieceDTOArray = []
    pieceArray.forEach(piece => {
        if (piece !== undefined) {
            let currentPlayerDTO = new playerDTO(piece.player, piece.color)
            let currentPieceDTO = new pieceDTO(currentPlayerDTO, piece.position)
            pieceDTOArray.push(currentPieceDTO)
        }
    });
    // console.log(pieceDTOArray);
    let currentPlayer = currentGame.getPlayer()
    let currentPlayerDTO = new playerDTO (currentPlayer.name, currentPlayer.color)
    return {board: pieceDTOArray, currentPlayer: currentPlayerDTO }

} 

/**
 * Handle the game joining event
 * @param {playerDTO} player 
 * @param {number} gameID 
 */
const handlejoinGame = (player, gameID) => {
    let currentGame = database.gameList[gameID]
    name = player.name
    color = player.color
    currentGame.addUser(name, color)
    console.log('New user ' + name + 'has been created with color ' + color)

}

// let testPlayerDTO = new playerDTO('Jordan', 'Blue')
// let testPiece = new pieceDTO(testPlayerDTO, 28)
// console.log(handleDiceRoll(0))
// console.log(handleMovePiece(0, testPiece))
// console.log(accessGameState(0))


module.exports = {
    //property name: function name
    handleDiceRoll: handleDiceRoll,
    handleMovePiece: handleMovePiece,
    accessGameState: accessGameState,
    handlejoinGame: handlejoinGame,
    playerDTO: playerDTO,
    pieceDTO: pieceDTO
}
