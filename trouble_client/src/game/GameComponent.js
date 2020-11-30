import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import CompletionContainer from './CompletionContainer';
import CompletionWindow from './CompletionWindow';
import DiceContainer from './DiceContainer';
// import SocketManager from './SocketManager'
import SocketProvider from './socket_context';
import TurnContainer from './TurnContainer';

/** Encapsulating component for the Game View  */
class GameComponent extends Component {
    render() {
        return (
            <SocketProvider>
                <TurnContainer></TurnContainer>
                <BoardContainer></BoardContainer>
                <DiceContainer></DiceContainer>
                <CompletionContainer></CompletionContainer>
            </SocketProvider>
        )}
}

export default GameComponent;