import { Component } from 'react';
import SocketContext from './socket_context/context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';



/** UI component to display the current player's turn.*/
class TurnStatusIndicator extends Component {
  static contextType = SocketContext;
  
  render() {
    return (
      <header>
        <Button>Test</Button>
      
      <div bg-color="green">{this.context.currentPlayer}'s turn</div>
      </header>
    );
  }
}

export default TurnStatusIndicator;