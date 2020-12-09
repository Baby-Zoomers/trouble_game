const board = require('./board')
const pieces = require('./piece')
let Board = board.Board
let Piece = pieces.Piece

const Colors = {
    blue: {
        name: 'a',
        homeBase: [28,29,30,31],
        startPoint: 4
    },
    yellow: {
        name: 'b',
        homeBase: [32,33,34,35],
        startPoint: 11
    },
    red: {
        name: 'c',
        homeBase: [36,37,38,39],
        startPoint: 18
    },
    green: {
        name: 'd',
        homeBase: [40,41,42,43],
        startPoint: 25
    }
}
var gameBoard = new Board()
colors = ['blue', 'yellow', 'red', 'green']
colors.forEach(color => {
    for(let i = 0; i < 4; i++) {
        let newPiece = new Piece(color, Colors[color].name, i, Colors[color].homeBase[i],  Colors[color].startPoint)
        gameBoard.board[newPiece.initPosition] = newPiece
    }
});

test("Check if isValidMove Work1", () => {
    expect(gameBoard.isValidMove(gameBoard.board[28],1)).toBe(false);
});
test("Check if isValidMove Work2", () => {
    expect(gameBoard.isValidMove(gameBoard.board[28],6)).toBe(true);
});

test("Check if isValidMove Work3", () => {
    expect(gameBoard.updateMoves(28,6)).toEqual(gameBoard.board[4]);
});

test("Check if isValidMove Work4", () => {
    expect(gameBoard.updateMoves(4,24)).toEqual(gameBoard.board[0]);
});

test("Check if isValidMove Work5", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],6)).toBe(false);
});
test("Check if isValidMove Work6", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],5)).toBe(false);
});
test("Check if isValidMove Work7", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],4)).toBe(false);
});
test("Check if isValidMove Work8", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],3)).toBe(true);
});
test("Check if isValidMove Work9", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],2)).toBe(true);
});
test("Check if isValidMove Work10", () => {
    expect(gameBoard.isValidMove(gameBoard.board[0],1)).toBe(true);
});
test("Check if isValidMove Work11", () => {
    expect(gameBoard.updateMoves(0,1)).toEqual(gameBoard.board[1]);
});

test("Check if isValidMove Work12", () => {
    expect(gameBoard.isValidMove(gameBoard.board[1],6)).toBe(true);
});
test("Check if isValidMove Work11", () => {
    expect(gameBoard.updateMoves(1,6)).toEqual(gameBoard.board[47]);
});
