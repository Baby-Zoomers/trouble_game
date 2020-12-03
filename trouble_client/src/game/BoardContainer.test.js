const { PlayerColors } = require("../Colors");
const { default: Piece } = require("../models/Piece");
const { updateBoardState } = require("./BoardContainer");

test('Spaces default to unoccupied & unhighlighted', () => {
  const pieces = [];
  const board = updateBoardState(pieces);
  Object.values(board.spaces).forEach(space => {
    expect(space.occupied).toBeFalsy();
    expect(space.highlighted).toBeFalsy();
  });
});

test('Occupied spaces are marked as occupied', () => {
  const pieces = [
    {player: {name:'p1', color:'red'},  space: 0},
    {player: {name:'p1', color:'red'},  space: 5},
    {player: {name:'p1', color:'red'},  space: 11},
    {player: {name:'p1', color:'red'},  space: 13},
    {player: {name:'p1', color:'red'},  space: 26},
    {player: {name:'p1', color:'red'},  space: 30},
    {player: {name:'p1', color:'red'},  space: 31},
    {player: {name:'p1', color:'red'},  space: 35},
    {player: {name:'p1', color:'red'},  space: 38},
    {player: {name:'p1', color:'red'},  space: 46},
    {player: {name:'p1', color:'red'},  space: 49},
    {player: {name:'p1', color:'red'},  space: 54},
    {player: {name:'p1', color:'red'},  space: 58},
    {player: {name:'p1', color:'red'},  space: 59},
];
  const board = updateBoardState(pieces);
  pieces.forEach(piece => {
    expect(board.spaces[piece.space].occupied).toBeTruthy();
  });
});

test('Occupied spaces have the correct player color', () => {
  const colors = {red: PlayerColors.red, yellow: PlayerColors.yellow, blue: PlayerColors.blue, green: PlayerColors.green};
  const pieces = [
    {player: {name:'p1', color:'red'},  space: 1},
    {player: {name:'p1', color:'red'},  space: 6},
    {player: {name:'p1', color:'red'},  space: 10},
    {player: {name:'p1', color:'red'},  space: 15},
    {player: {name:'p1', color:'blue'},  space: 23},
    {player: {name:'p1', color:'blue'},  space: 28},
    {player: {name:'p1', color:'blue'},  space: 32},
    {player: {name:'p1', color:'blue'},  space: 36},
    {player: {name:'p1', color:'yellow'},  space: 40},
    {player: {name:'p1', color:'yellow'},  space: 45},
    {player: {name:'p1', color:'yellow'},  space: 50},
    {player: {name:'p1', color:'yellow'},  space: 52},
    {player: {name:'p1', color:'green'},  space: 57},
    {player: {name:'p1', color:'green'},  space: 59},
];
  const board = updateBoardState(pieces);
  pieces.forEach(piece => {
    expect(board.spaces[piece.space].color).toEqual(colors[piece.player.color]);
  });
});

test('Empty spaces can be set individually', () => {
  const pieces = [];
  const board = updateBoardState(pieces);
  board.spaces[0].highlighted = true;
  for(let i=1; i < Object.keys(board.spaces).length; i++){
    expect(board.spaces[i].highlighted).toBeFalsy();
  }
});