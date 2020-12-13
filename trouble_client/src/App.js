import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import GameJoiner from './GameJoiner';
// import GameComponent from './game/GameComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

/** Main React App component
 * @extends Component
 */
class App extends Component {

  /** Render the app */
   render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" data-testid="App-header">
            <GameJoiner/>
          </header>
        </div>
      </Router>
    );
  }
}


export default App;
