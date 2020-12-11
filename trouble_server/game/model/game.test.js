const { expect } = require("@jest/globals");
const { Board } =  require('./board')
const { Game } = require("./game");
jest.mock('./board')

const mockGetCompletedPlayer = jest.fn(() => false);
Board.prototype.checkColorCompletion = mockGetCompletedPlayer;
Board.prototype.board = {};

test('getCompletedPlayer calls checkColorCompletion for each player', () => {
    const game = new Game(1);
    const testPlayer1 = {name: 'Test Player 1', color: 'red'}
    const testPlayer2 = {name: 'Test Player 2', color: 'blue'}
    game.addUser(testPlayer1.name, testPlayer1.color);
    game.addUser(testPlayer2.name, testPlayer2.color);

    const completedPlayer = game.getCompletedPlayer()
    expect(completedPlayer).toBeFalsy();
    expect(mockGetCompletedPlayer.mock.calls[0][0]).toEqual('red');
    expect(mockGetCompletedPlayer.mock.calls[1][0]).toEqual('blue');
});

test('getCompletedPlayer returns the player that had a completion', () => {
    
    const game = new Game(1);
    const testPlayer1 = {name: 'Test Player 1', color: 'red'}
    const testPlayer2 = {name: 'Test Player 2', color: 'blue'}
    game.addUser(testPlayer1.name, testPlayer1.color);
    game.addUser(testPlayer2.name, testPlayer2.color);
    
    mockGetCompletedPlayer.mockImplementation((color) => color === testPlayer2.color);

    const completedPlayer = game.getCompletedPlayer()
    expect(completedPlayer).toBeTruthy();
    expect(completedPlayer.name).toEqual(testPlayer2.name);
    expect(completedPlayer.color).toEqual(testPlayer2.color);
});