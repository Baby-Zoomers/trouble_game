//const chalk = require('chalk')

/**
 * Represents a piece
 * @constructor
 * @param {string} color - color of the piece
 * @param {int} index - index of the piece
 * @param {int} position - initial postion of the piece at the home space
 * @param {init} start - start postion for this color
 * @
 * 
 */

class Piece {
    constructor(color, index, position, start) {
        this.color = color
        this.index = index
        this.initPosition = position
        this.startPosition = start
        this.position = position
        this.terminated = false
      }
    
    /**
     * Move the piece
     * @param {int} steps - steps need to be moved
     */
    
    move = function (steps) {
        //send piece back to home base
        if (steps === 0) {
            this.position = this.initPosition
            console.log('Your piece return to matching home')
        }
        else {
            //TODO: check the correct destination of the piece.
            if (this.position === this.initPosition) {
                this.position = steps
            }
            else {
                this.position += steps
            }
        }
    }
}

module.exports.Piece = Piece;