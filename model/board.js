const pieces = require('./piece')
let Piece = pieces.Piece

/**
 * Represents a game board
 * @constructor
 */
class Board {
    constructor() {
        this.Circle = new Array(28)
        this.greenFinishLine = new Array(4)
        this.blueFinishLine = new Array(4)
        this.yellowFinishLine = new Array(4)
        this.redFinishLine = new Array(4)  
    }

    /**
     * Check if a valid move on board
     * @param {Piece} piece - piece object
     * @param {number} steps - steps need to move
     * @return {boolean} - the validity of the move
     */

    isValidMove = function(piece, steps) {
        
    }

     /**
     * Update the move on board
     * @param {Piece} piece - piece object
     * @param {number} steps - steps need to move
     */
    updateMoves = function(piece, steps) {
        
        piece.move(steps)
        
    }

}


module.exports.Board = Board