/** Error thrown when an operation is performed on a non existing game */
class GameNotFoundError extends Error {
    constructor(...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)
      }
}

module.exports.GameNotFoundError = GameNotFoundError;