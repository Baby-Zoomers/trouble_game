import { Component } from 'react';
import SocketContext from './socket_context/context';

import Button from 'react-bootstrap/Button';



/** UI component to prompt the user to roll the dice and then show the result*/
class DiceWindow extends Component {

  static contextType = SocketContext;

    render() {
        return (
          <Button variant="primary" onClick={this.props.handleDiceClick}>
          Roll
          </Button>
        );
      }

}

export default DiceWindow;