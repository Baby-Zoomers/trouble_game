import { Component } from 'react';
import Dice from './Dice';
import { sendRollDice } from './socket_context/sockets/emit';

import SocketContext from './socket_context/context';


/** Dice Roll management logic. Consumes roll result messages and manages dice roll state.*/
class DiceContainer extends Component {

  static contextType = SocketContext;

  /** Called when dice are clicked. 
   * If it is your turn and we have not rolled yet, send dice roll msg to server. */
  rollDice = () => {
    console.log("roll dice")
    sendRollDice();
  }

  render() {
        let rollEnabled = (this.context.myTurn && this.context.canRoll);
        return (
          // TODO: figure out how to handle the no moves scenario
          <Dice roll={this.context.rollResult} onClick={this.rollDice} disabled={!rollEnabled} highlighted={rollEnabled} cx={this.props.cx} cy={this.props.cy}/>
        );
      } 

}

export default DiceContainer;