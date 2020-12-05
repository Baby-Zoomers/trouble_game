import { Component } from 'react';
import SocketContext from './socket_context/context';


/** UI component to prompt the user to roll the dice and then show the result*/
class DiceWindow extends Component {

  static contextType = SocketContext;

    render() {
        return (
        <div bg-color="#bbbbbb" onClick={this.props.handleDiceClick}>{this.context.id}: {this.context.myTurn ? "my turn: " : "waiting... "} lastRoll was a {this.context.rollResult}</div>
        );
      }

      /* Called when dice are clicked */
  handleDiceClick = () => {
    this.props.handleDiceClick();
  }
}

export default DiceWindow;