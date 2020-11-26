import React, { Component } from 'react';
import './App.css';
import GameComponent from './game/GameComponent';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

/** Main React App component
 * @extends Component
 */
class App extends Component {

  /** Render the app */
   render() {
    return (
      <div className="App">
        <header className="App-header" data-testid="App-header">

          <GameComponent></GameComponent>
        </header>
      </div>
    );
  }
}


export default App;
