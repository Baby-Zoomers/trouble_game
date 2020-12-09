import { Component } from 'react';
import DiceWindow from './DiceWindow';
import { sendRollDice, movePiece } from './socket_context/sockets/emit';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SocketContext from './socket_context/context';


/** Dice Roll management logic. Consumes roll result messages and manages dice roll state.*/
class DiceContainer extends Component {

  static contextType = SocketContext;

  constructor(props) {
    super(props);
    this.state = {diceRoll: 6};
    this.state = {show: false}
  }

  handleShow = () => this.setState({show: true});
  handleClose = () => {
    if (this.context.availableMoves.length === 0) {
      movePiece(null);
    }
    this.setState({show: false});
  }

  /** Called when dice are clicked. 
   * If it is your turn and we have not rolled yet, send dice roll msg to server. */
  rollDice = () => {
    console.log("roll dice")
    sendRollDice();
    this.handleShow();
  }

  render() {

        return (
          <div>
          {this.context.myTurn &&
            <Button variant="primary" size="lg" block onClick={this.rollDice} disabled={!this.context.canRoll}>
              Roll Dice
            </Button>
          }
            

            <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Role Dice
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.context.availableMoves.length === 0 ? "No moves available. Close dice window to end turn" : "You rolled a " + this.context.rollResult + ". Close dice window to select piece to move." }
              </Modal.Body>
              <Modal.Footer>
                <DiceWindow roll={this.state.diceRoll} handleDiceClick={this.handleClose}></DiceWindow>
              </Modal.Footer>
            </Modal>

            {this.props.children}
          </div>
        );
      } 

}

export default DiceContainer;