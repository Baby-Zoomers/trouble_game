//const chalk = require('chalk')

/**
 * Represents a piece
 * @constructor
 * @param {string} color - color of the piece
 * @param {number} index - index of the piece
 * @param {number} position - initial postion of the piece at the home space
 * @param {number} start - start postion for this color
 * 
 */

class Piece {
    constructor(color, player, index, position, start) {
        this.color = color
        this.player = player
        this.index = index
        this.initPosition = position
        this.startPosition = start
        this.position = position
        this.onCircle = false
        this.finishlineReady = false
        this.terminated = false
      }
    
    /**
     * Move the piece
     * @param {number} steps - steps need to be moved, move(-1) means send back to homebase
     */
    
    move = function (steps) {
        //send piece back to home base
        if (steps === -1) {
            this.currentPosition = this.initPosition
            console.log('Your piece return to matching home')
        }
        else {
            //TODO: check the correct destination of the piece.
            if (this.currentPosition === this.initPosition) {
                this.currentPosition = steps
            }
            else {
                this.currentPosition += steps
            }
        }
        //Check if ready to enter its own finishline
        if (this.currentPosition === this.startPosition - 1) {
            this.finishlineReady = true
        }
        if (this.onCircle === false && this.currentPosition >= 0 && this.currentPosition <= 27) {
            this.onCircle = true
        }
    }
}

module.exports.Piece = Piece;