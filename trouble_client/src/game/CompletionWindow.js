import { Component } from 'react';
import SocketContext from './socket_context/context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/** UI component to show that a user has completed the board (win if user, loss if other player)*/
class CompletionWindow extends Component {
  
  static contextType = SocketContext;
  
    render() {
        return (
        
      

        
          <div bg-color="red">{this.context.completedPlayer.name} Won!</div>
      
        );
    }
}

export default CompletionWindow;