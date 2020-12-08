import { Component } from 'react';
import CompletionWindow from './CompletionWindow';


/** Completion (win/loss) management logic. Consumes completion messages and manages completed player state*/
class CompletionContainer extends Component {
    render() {
        return <div className={"container-div " + this.props.className}>
          {this.props.children}
          <CompletionWindow></CompletionWindow>
        </div>
      }
}

export default CompletionContainer;