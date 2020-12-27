import { Component } from 'react';
import { movePiece } from './socket_context/sockets/emit';

import SocketContext from './socket_context/context';
import Infobox from './Infobox';
import Button from 'react-bootstrap/esm/Button';


/** Logic for displaying an info box to the user. 
 * Also displays a button to end turn if no moves are available.*/
class InfoboxContainer extends Component {

  static contextType = SocketContext;

  /** Called end turn button is clicked.
   * Sends makeMove msg to server with a null piece*/
  endTurn = () => {
    console.log("end turn")
    movePiece(null);
  }

  /**
   * Determines the message to diplay in the infobox
   * If other player's turn -> Waiting for $player to make a move
   * If my turn && waiting for roll -> click dice to roll
   * If my turn && waiting for move -> click piece to move / no moves available
   * If gameover -> $player won
   */
    getMessage = () => {
        if (this.context.completedPlayer !== null) {
            return `${this.context.completedPlayer.name} won!`;
        } else if (this.context.myTurn) {
            if (this.context.availableMoves.length !== 0) {
                return `Click a piece to move it`;
            } else if (this.context.canRoll){
                return `Click the dice to roll`;
            } else {
                return `No moves available`;
            } 
        } else if(this.context.currentPlayer !== null) {     // Not my turn
            return `Waiting for ${this.context.currentPlayer.name} to move`;
        } else {
            return ``;
        }
    }

    render() {
        const styles = {
            width: "800px",
            position: "absolute",
            top: "250px"
        }
        const btnStyles = {
            marginTop: "10px"
        }
        return <div style={styles}>
            <Infobox msg={this.getMessage()} width="250px"/>
            { this.context.myTurn && !this.context.canRoll && this.context.availableMoves.length === 0 && 
            <Button variant="primary" style={btnStyles} onClick={this.endTurn}>End Turn</Button>
            }
        </div>;
    } 

}

export default InfoboxContainer;