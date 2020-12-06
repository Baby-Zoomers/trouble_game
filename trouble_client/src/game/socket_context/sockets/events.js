import Piece from '../../../models/Piece';
import { updateBoardState } from '../../BoardContainer';
import Player from '../../../models/Player';
import { socket } from './index';

/**
 * 
 * @classdesc listens to events emitted from server
 */
export const socketEvents = ({ setValue }) => {
  socket.on('rollResult', ({rollResult, availableMoves}) => {
    setValue(state => { 
      console.log(availableMoves);
      return { ...state, rollResult, availableMoves };
    });
  });

  socket.on('currentPlayer', (currentPlayer) => {
    setValue(state => { return { ...state, 
      currentPlayer: new Player(currentPlayer.name, currentPlayer.color) }
    });
  });

  socket.on('myTurn', (myTurn) => {
    setValue(state => { return { ...state, myTurn }});
  });

  socket.on('completedPlayer', ({ completedPlayer }) => {
    setValue(state => { return { ...state, completedPlayer }});
  });

  socket.on('newMove', (newMoveMsg) => {
    // Convert msg to client models
    console.log(newMoveMsg);
    const board = Object.values(newMoveMsg.board).map(pieceDTO => Piece.fromDTO(pieceDTO));
    const boardState = updateBoardState(board);
    setValue(state => { return { ...state, boardState }});
  });

  socket.on('gameOver', ({gamOver}) => {
    setValue(state => { return { ...state, gamOver }});
  });
};
