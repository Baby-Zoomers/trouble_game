import { Component } from 'react';
import TurnStatusIndicator from './TurnStatusIndicator';


/** Turn management logic. Consumes next turn messages and manages currentTurn state*/
class TurnContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPlayer: 'Player 1'};
  }

    render() {
        return (<div className={"container-div " + this.props.className}>
            <TurnStatusIndicator player={this.state.currentPlayer}></TurnStatusIndicator>
            {this.props.children}
        </div>)
      }
}

export default TurnContainer;