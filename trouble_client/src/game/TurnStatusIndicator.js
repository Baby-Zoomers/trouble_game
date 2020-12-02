import { Component } from 'react';
import SocketContext from './socket_context/context';

import Button from 'react-bootstrap/Button';


/** UI component to display the current player's turn.*/
class TurnStatusIndicator extends Component {
  static contextType = SocketContext;
  
  render() {
    return (
    
    
    <div bg-color="green">{this.context.currentPlayer}'s turn</div>
    
    );
  }
}

export default TurnStatusIndicator;