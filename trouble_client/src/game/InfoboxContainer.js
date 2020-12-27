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
            <Infobox msg="No Moves Available" width="250px"/>
            <Button variant="primary" style={btnStyles}>End Turn</Button>
        </div>;
    } 

}

export default InfoboxContainer;