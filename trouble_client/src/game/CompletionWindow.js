import { Component } from 'react';
import SocketContext from './socket_context/context';

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