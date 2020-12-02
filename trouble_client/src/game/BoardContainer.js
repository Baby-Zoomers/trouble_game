import { Component } from 'react';
import SpaceState from '../models/SpaceState';
import Board from './Board'

const numSpaces = 60;

/** Board management logic. Consumes move messages and manages board state.*/
class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {board: "board"};
  }

    render() {
        return (
          <div className={"container-div " + this.props.className}>
            {this.props.children}
            <Board boardState={this.state.board}></Board>
          </div>)
      }
}

export default BoardContainer;

/**
 * Handle a new Move Message from the server. Updates the state of the board.
 * @param {Piece[]} pieces: NewMoveMsg object containing the updated board state
 * @returns {Object} updated board state (can to be copied into context)
 */
export function updateBoardState(pieces){
  const newBoard = {spaces: {}};
  const emptySpace = new SpaceState(false, '', false);
  for (let i=0; i<numSpaces; i++) {
    newBoard.spaces[i] = emptySpace;  // initialize empty
  } 

  pieces.forEach( piece => {
    newBoard.spaces[piece.space] = new SpaceState(true, piece.player.color, false);
  })
  return newBoard;
}