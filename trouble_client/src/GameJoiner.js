import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import GameComponent from './game/GameComponent';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { closeSocket } from './game/socket_context/sockets';


/** Encapsulating component for the Game View  */
class GameJoiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gameId: "",
            joinGameId: null
        }
        handleGameNotFound = this.handleGameNotFound;
    }

    onCreateGame = (e) => {
        e.preventDefault();
        const { name } = this.state;
        this.setState({message: null});

        const options = {
            method: "POST",
        };
                
        fetch('/api/create/game/', options)
            .then(res => res.json())
            .then(res => {
                this.setState({ joinGameId: res.gameId });
                this.props.history.push("/game/"+res.gameId);
            });
    }

    onJoinGame = (e) => {
        e.preventDefault();
        this.setState({message: null});
        const { gameId } = this.state;
        this.setState({joinGameId: gameId});
        this.props.history.push("/game/" + gameId);
    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
        });
    }

    handleGameIdChange = (e) => {
        e.preventDefault();
        this.setState({
            gameId: e.target.value,
        });
    }

    handleGameNotFound = (msg) => {
        // Navigate home
        console.error(msg);
        this.setState({message: msg})
        closeSocket();
        this.props.history.push("/");
    }

    render() {
        return (
            <Switch>
            <Route path="/game/:gameId">
                { (this.state.joinGameId != null && this.state.name != "") ?
                    <GameComponent name={this.state.name} gameId={this.state.joinGameId}/> :
                    <Redirect to="/"/>
                }
            </Route> 
            <Route path="/">
                {this.state.message != null && 
                (<Alert variant='danger' onClose={() => this.setState({message: null})} dismissible>
                    <p>{this.state.message}</p>
                </Alert>  )}
                <Form>
                    <Form.Group>
                        <Form.Label>Name: </Form.Label>
                        <Form.Control value={this.state.name} onChange={this.handleNameChange} type="text" placeholder="Enter your name here"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>GameId: </Form.Label>
                        <Form.Control type="text" placeholder="Required if joining game" value={this.state.gameId} onChange={this.handleGameIdChange}></Form.Control>
                    </Form.Group>
                    <Button onClick={this.onCreateGame}>Create Game</Button>
                    <Button onClick={this.onJoinGame} variant="primary">Join Game</Button>
                </Form>
            </Route>
            </Switch>
        )}
}

export default withRouter(GameJoiner);

export let handleGameNotFound = (msg) => {};