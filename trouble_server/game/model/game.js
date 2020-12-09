const pieces = require('./piece')
const board = require('./board')
const user= require('./user')

const Colors = {
    blue: {
        homeBase: [28,29,30,31],
        startPoint: 4
    },
    yellow: {
        homeBase: [32,33,34,35],
        startPoint: 11
    },
    red: {
        homeBase: [36,37,38,39],
        startPoint: 18
    },
    green: {
        homeBase: [40,41,42,43],
        startPoint: 25
    }
}

let Piece = pieces.Piece
let Board = board.Board
let User = user.User

/**
 * Represents a game
 * @constructor
 */
class Game {
    constructor(gameID) {
        this.gameID = gameID
        this.userNumber = 0
        this.userList = new Array(4)
        this.gameBoard = new Board()
        this.piecesPerUser = 4
        this.dice = 0
        this.currentUser = 0
        this.winners = []
    }

    /**
     * Add user to the game
     * @param {string} name - user name
     * @param {string} color - user color
     */
    addUser = function (name, color) {
        if (this.userNumber < 4) {
            let newUser = new User(name, color)
            this.userList[this.userNumber] = newUser
            let pieces = new Array()
            
            for(let i = 0; i < this.piecesPerUser; i++) {
                let newPiece = new Piece(color, name, i, Colors[color].homeBase[i],  Colors[color].startPoint)
                pieces.push(newPiece)
                this.gameBoard.board[newPiece.initPosition] = newPiece
            }
            newUser.pieces = pieces
            //console.log(newUser.pieces[0].finishLinePosition)
            this.userNumber ++
            // console.log(this.gameBoard.board)
        } 
        else {
            console.log('Exceed User Limit!')
        }

    }

    getDice = function () {
        return this.dice
    }

    getPlayer = function () {
        return this.userList[this.currentUser]
    }

    //Each user who roll the highest number, go fisst 
    assignFirstPlayer = function (maxDice) {
        this.currentUser = maxDice
    }

    /** Roll the dice
     * @return {number} randomly output 1 - 6
     */
    rollDice = function () {
        this.dice = Math.floor(Math.random() * 6) + 1
        // this.dice = 6
        console.log('User ' + this.currentUser + ' just rolled ' + this.dice)
        return this.dice  
    }

    /** get all the avilable piece for the current user
     * @return {Piece[]} array of available 
     */
    getAvailablePieces = function () {
        const availablablePieces = this.userList[this.currentUser].pieces.filter(piece => {
            return this.gameBoard.isValidMove(piece, this.dice)
            
        })
        //return a list of available pieces
        return availablablePieces
    }

    /** move the piece and update turn
     * @param {int} - space containing the piece to move
     */
    movePiece = function (space) {
        this.gameBoard.updateMoves(space, this.dice)
        
    }

    updateTurn = function () {
        this.currentUser = this.currentUser === this.userNumber-1 ?  0 : this.currentUser + 1
        console.log(this.currentUser)
        return this.userList[this.currentUser]
    }

    /** Check each player if they have all four pieces in the finish line
     * @returns {Player} - return the player that has completed if one has, otherwise return null.
     */
    getCompletedPlayer = function () {
        for (let i=0; i< this.userNumber; i++){
            if (this.gameBoard.checkColorCompletion(this.userList[i].color)){
                return user;
            }
        }
        return null
    }

}
module.exports.Game = Game
// const game = new Game(0)
// game.addUser('Xuan', 'blue')
// console.log(game.userList[0].pieces[0].initPosition)
// console.log(game.rollDice())