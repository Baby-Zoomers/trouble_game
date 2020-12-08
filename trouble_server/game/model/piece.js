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
    
    move = function (destination, terminated) {
        //send piece back to home base
        if (destination === -1) {
            this.currentPosition = this.initPosition
            this.onCircle = false
            console.log('Your piece return to matching home')
        }
        else {
            this.position = destination
        }
        //Check if ready to enter its own finishline
        if (this.currentPosition === this.startPosition - 1) {
            this.finishlineReady = true
        }
        //check if the piece leave the home base
        if (this.onCircle === false && this.position >= 0 && this.position <= 27) {
            this.onCircle = true
        }
        if (terminated === true) {
            this.terminated = true
        }

    }
}

module.exports.Piece = Piece;