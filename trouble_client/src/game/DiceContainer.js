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
          <div>
            <Button variant="primary" size="lg" block onClick={handleShow}>
              Roll Dice
            </Button>

            <Modal show={this.state.show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closebutton>
                <Modal.Title>
                  Role Dice
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Roll the dice here!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Roll
                  <DiceWindow roll={this.state.diceRoll} handleDiceClick={this.rollDice}></DiceWindow>
                </Button>
              </Modal.Footer>
            </Modal>

            <DiceWindow roll={this.state.diceRoll} handleDiceClick={this.rollDice}></DiceWindow>
            {this.props.children}
          </div>
        );
      } 

  /** Called when dice are clicked. 
   * If it is your turn and we have not rolled yet, send dice roll msg to server. */
  rollDice = () => {
    console.log("roll dice")
    sendRollDice();
  }
}

export default DiceContainer;