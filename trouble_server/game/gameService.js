const database = require('./model/database')
const pieces = require('./model/piece')
const { GameNotFoundError } = require('../errors/gameNotFoundError')
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
    let currentGame = database.getGame(gameID)
    const { rollResult, canRoll } = currentGame.rollDice()
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
        canRoll,
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
    // let currentGame = database.getGame(gameID)
    // currentGame.movePiece(piece.space)
    // var currentPlayer = currentGame.getPlayer()
    // if (currentGame.getDice() !== 6) {
    //     currentPlayer = currentGame.updateTurn()
    // }
    // //currentPlayer = currentGame.updateTurn()
    // let currentPlayerDTO = new playerDTO (currentPlayer.name, currentPlayer.color)
    // //socketManager.sendNextTurn(currentPlayerDTO)
    // //console.log(currentGame.gameBoard.board)
    
    // return currentPlayerDTO
    let currentGame = database.getGame(gameID)
    var currentPlayer = currentGame.getPlayer()
    if (piece === null) {
        currentPlayer = currentGame.updateTurn()
    }
    else {
        currentGame.movePiece(piece.space)
        if (currentGame.getDice() !== 6) {
            currentPlayer = currentGame.updateTurn()
        }
    }
    let currentPlayerDTO = new playerDTO (currentPlayer.name, currentPlayer.color)
    return currentPlayerDTO
}

/**
 * Handle the newMove event
 * @param {number} gameID - the gameID of current game
 * @return {pieceDTO[]} - a boardDTO represents the updated board
 */
const accessGameState = (gameID) => {
    let currentGame = database.getGame(gameID)
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
 * Check for a player completion (game over)
 * @param {number} gameID - the gameID of current game
 * @return {Player} - the player that won or null if the game is not over
 */
const checkCompletion = (gameID) => {
    const currentGame = database.getGame(gameID)
    const completedPlayer = currentGame.getCompletedPlayer()
    if (completedPlayer){
        return new playerDTO(completedPlayer.name, completedPlayer.color);
    }
    
    return null;
} 

/**
 * Handle the game joining event
 * @param {playerDTO} player 
 * @param {number} gameID 
 * @throws {GameNotFoundError} if gameId is not valid
 */
const handlejoinGame = (player, gameID) => {
    let currentGame = database.getGame(gameID)
    if (!currentGame){
        throw new GameNotFoundError(`Game Id: ${gameID} not found`)
    }

    let name = player.name
    let color = player.color
    currentGame.addUser(name, color)
    console.log('New user ' + name + 'has been created with color ' + color)

}

/**
 * Handle the game joining event
 * @return {Int} gameId
 */
const handleCreateGame = () => {
    return database.createNewGame();
}

/**
 * Handle the removal of a game
 * @param {Int} gameID
 */
const handleCloseGame = (gameID) => {
    console.log("deleteing game: ", gameID)
    return database.closeGame(gameID);
}

/**
 * Handle the removal of a player from a game
 */
const handleRemovePlayer = (player, gameID) => {
    console.log("remove the player " + player.name + " from game room " + gameID)
    let currentGame = database.getGame(gameID)
    currentGame.removePlayer(player)

}

module.exports = {
    //property name: function name
    handleDiceRoll: handleDiceRoll,
    handleMovePiece: handleMovePiece,
    accessGameState: accessGameState,
    checkCompletion: checkCompletion,
    handlejoinGame: handlejoinGame,
    handleCreateGame: handleCreateGame,
    handleCloseGame: handleCloseGame,
    handleRemovePlayer: handleRemovePlayer,
    playerDTO: playerDTO,
    pieceDTO: pieceDTO
}
