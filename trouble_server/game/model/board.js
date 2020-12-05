const pieces = require('./piece')
let Piece = pieces.Piece



/**
 * Represents a game board
 * @constructor
 */
const finishLineCoordinate = {
    blue: [44,45,46,47],
    yellow: [48,49,50,51],
    red: [52,53,54,55],
    green: [56,57,58,59]
}


class Board {
    constructor() {
        this.board = new Array(60)
        this.finishLineLeft = {
            blue: 4,
            yellow: 4,
            red: 4,
            green: 4
        }
    }

    /**
     * Check if a valid move on board
     * @param {Piece} piece - piece object
     * @param {number} steps - steps need to move
     * @return {boolean} - the validity of the move
     */
    isValidMove = function(piece, steps) {
        //terminated piece
        if (piece.terminated === true) 
            return false
        //piece at homebase and didn't roll a 6
        if (piece.onCircle === false && steps !== 6) 
            return false
        //check if the piece can enter finish line
        if (piece.finishlineReady === true && this.finishLineLeft[piece.color] !== steps) 
            return false
        //check if the piece will land on own piece
        if (piece.onCircle === true) {
            let destination = (piece.position + steps) % 28
            if (this.board[destination].color === piece.color) {
                return false
            }
        }
        return true
    }

     /**
     * Update the move on board
     * @param {Piece} piece - piece object
     * @param {number} steps - steps need to move
     */
    updateMoves = function(piece, steps) {
        
        piece.move(steps)
        this.board[1] = piece
        this.board[2] = piece
        
    }

}

var newBoard = new Board()

module.exports.Board = Board