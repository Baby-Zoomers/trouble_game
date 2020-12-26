import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import CompletionContainer from './CompletionContainer';
import GameContext from './socket_context';
import TurnContainer from './TurnContainer';
import './Game.css';


/** Encapsulating component for the Game View  */
class GameComponent extends Component {

    render() {
        return (
            <div className="game-container my-4">
                <GameContext name={this.props.name} gameId={this.props.gameId} >
                    <TurnContainer className="status-indicator mx-2 my-1"></TurnContainer>
                    <BoardContainer></BoardContainer>
                    <CompletionContainer></CompletionContainer>
                </GameContext>
            </div>
            
        )}
}

export default GameComponent;