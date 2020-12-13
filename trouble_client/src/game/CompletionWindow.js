import { Component } from 'react';
import SocketContext from './socket_context/context';

import Modal from 'react-bootstrap/Modal';

/** UI component to show that a user has completed the board (win if user, loss if other player)*/
class CompletionWindow extends Component {
  
  static contextType = SocketContext;

  constructor(props) {
    super(props);
    this.state = {show: true}
  }

  handleShow = () => this.setState({show:true});

  handleClose = () => this.setState({show:false});
  
    render() {
        return (

          <div>
            {this.context.completedPlayer != null &&
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Game Over!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {this.context.completedPlayer.name} Won!
                </Modal.Body>
              </Modal>
            }
            {this.handleShow}
          </div>
          
        );
    }
}

export default CompletionWindow;