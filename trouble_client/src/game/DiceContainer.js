import { Component } from 'react';
import DiceWindow from './DiceWindow';
import { sendRollDice } from './socket_context/sockets/emit';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


/** Dice Roll management logic. Consumes roll result messages and manages dice roll state.*/
class DiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {diceRoll: 6};
    this.state = {show: false}
  }

  render() {


        const handleShow = () => this.setState({show: true});
        const handleClose = () => this.setState({show: false});

        return (
        <div className={"container-div " + this.props.className}>
          <DiceWindow roll={this.state.diceRoll} handleDiceClick={this.rollDice}></DiceWindow>
          {this.props.children}
        </div>);
      }

  /** Called when dice are clicked. 
   * If it is your turn and we have not rolled yet, send dice roll msg to server. */
  rollDice = () => {
    console.log("roll dice")
    sendRollDice();
  }
}

export default DiceContainer;