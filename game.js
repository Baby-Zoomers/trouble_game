const pieces = require('./piece')
const board = require('./board')
const user= require('./user')

const Colors = {
    blue: {
        homeBase: [28,29,30,31],
        startPoint: 4
    },
    yellow: {
        homeBase: [28,29,30,31],
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
    constructor() {
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
                let newPiece = new Piece(color, i, Colors[color].homeBase[i],  Colors[color].startPoint)
                pieces.push(newPiece)
            }
            newUser.pieces = pieces
            this.userNumber ++
        } 
        else {
            console.log('Exceed User Limit!')
        }

    }

    //Each user who roll the highest number, go fisst 
    assignFirstPlayer = function (maxDice) {
        this.currentUser = maxDice
    }

    /** Roll the dice
     * @return {int} randomly output 1 - 6
     */
    rollDice = function () {
        this.dice = Math.floor(Math.random() * 6) + 1
        console.log('User ' + this.userNumber + ' just rolled ' + this.dice)
        return this.dice  
    }

    /** get all the avilable piece for the current user
     * @return {[Piece]} array of available 
     */
    getAvailablePieces = function () {
        const availablablePieces = this.userList[this.currentUser].pieces.forEach(piece => {
            this.gameBoard.isValidMove(piece)
        })
        //return avilablePieces Object
        return availablablePieces
    }

    /** move the piece and update turn
     * @param {Piece} - selected piece object
     */
    movePiece = function (piece) {
        gameBoard.updateMoves(piece)
        this.currentUser = this.currentUser === 3 ?  0 : this.currentUser + 1
    }


    

    


}

const game = new Game()
game.addUser('Xuan', 'blue')
console.log(game.userList[0].pieces[0].initPosition)
console.log(game.rollDice())