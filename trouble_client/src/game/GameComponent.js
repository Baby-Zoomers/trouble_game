import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import CompletionContainer from './CompletionContainer';
import DiceContainer from './DiceContainer';
import SocketProvider from './socket_context';
import TurnContainer from './TurnContainer';
import './Game.css';


/** Encapsulating component for the Game View  */
class GameComponent extends Component {
    render() {
        return (
            <div className="game-container my-4">
                <SocketProvider>
                    <TurnContainer className="status-indicator mx-2 my-1"></TurnContainer>
                    <BoardContainer></BoardContainer>
                    <DiceContainer></DiceContainer>
                    <CompletionContainer></CompletionContainer>
                </SocketProvider>
            </div>
            
        )}
}

export default GameComponent;