/**
 * Represents a user
 * @constructor
 * @param {string} name - user name
 * @param {string} color - user color
 */

class User {
    constructor (name, color) {
        this.name = name
        this.color = color
        this.pieces = []
    } 
}

module.exports.User = User;