import { updateBoardState } from '../../BoardContainer';
import { socket } from './index';

/**
 * 
 * @classdesc listens to events emitted from server
 */
export const socketEvents = ({ setValue }) => {
  socket.on('rollResult', (rollResult) => {
    setValue(state => { return { ...state, rollResult }});
  });

  socket.on('currentPlayer', ({ currentPlayer }) => {
    setValue(state => { return { ...state, currentPlayer }});
  });

  socket.on('completedPlayer', ({ completedPlayer }) => {
    setValue(state => { return { ...state, completedPlayer }});
  });

  socket.on('newMove', (newMoveMsg) => {
    console.log(newMoveMsg)
    const boardState = updateBoardState(newMoveMsg.board)
    setValue(state => { return { ...state, boardState }});
  });

  socket.on('gameOver', ({gamOver}) => {
    setValue(state => { return { ...state, gamOver }});
  });
};
