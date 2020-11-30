import { Component } from 'react';
import SocketContext from './socket_context/context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { getPlayerColorDark, getPlayerColorLight } from '../Colors';



/** UI component to display the current player's turn.*/
class TurnStatusIndicator extends Component {
  static contextType = SocketContext;

  render() {
    const player = this.context.currentPlayer;
    const style = {
      backgroundColor: player.color,
      color: getPlayerColorDark(player.color)
    }

    return (
      <span className="badge px-3 py-2" style={style}>{player.name}'s turn </span>
    );
  }
}

export default TurnStatusIndicator;