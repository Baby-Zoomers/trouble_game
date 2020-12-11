import Piece from '../../../models/Piece';
import { updateBoardState } from '../../BoardContainer';
import Player from '../../../models/Player';
import { socket } from './index';

/**
 * 
 * @classdesc listens to events emitted from server
 */
export const socketEvents = ({ setValue }) => {
  socket.on('rollResult', ({rollResult, canRoll, availableMoves}) => {
    setValue(state => { 
      console.log(availableMoves);
      const boardState = state.boardState;
      availableMoves.forEach(piece => boardState.spaces[piece.space].highlighted = true);
      return { ...state, rollResult, canRoll, availableMoves, boardState};
    });
  });

  socket.on('currentPlayer', (currentPlayer) => {
    setValue(state => { return { ...state, 
      currentPlayer: new Player(currentPlayer.name, currentPlayer.color) }
    });
  });

  socket.on('myTurn', ({ myTurn, canRoll }) => {
    setValue(state => { return { ...state, myTurn, canRoll }});
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
