import { Component } from 'react';
import Board from './Board'

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