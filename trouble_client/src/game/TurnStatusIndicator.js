import { Component } from 'react';
import SocketContext from './socket_context/context';
import { getPlayerColorDark, getPlayerColorLight } from '../Colors';



/** UI component to display the current player's turn.*/
class TurnStatusIndicator extends Component {
  static contextType = SocketContext;

  render() {
    const player = this.context.currentPlayer;
    let classes = "";
    let styles = {};
    let text = "Waiting for Connection";
    if (player !== null){
      classes = "";
      styles = {
        backgroundColor: getPlayerColorLight(player.color),
        color: getPlayerColorDark(player.color)
      };
      text = player.name + "'s turn";
    } else {
      classes = "bg-secondary text-white";
    }
    
    return <span className={"badge px-3 py-2 " + classes} style={styles}>{text}</span>
  }
}

export default TurnStatusIndicator;