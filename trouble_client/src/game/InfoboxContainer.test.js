import { render, fireEvent } from '@testing-library/react';

jest.mock('./socket_context/sockets/emit');

import SocketContext from './socket_context/context';
import InfoboxContainer from './InfoboxContainer'
import { PlayerColors } from '../Colors';
import { movePiece } from './socket_context/sockets/emit';

test('Shows waiting for player msg on other player\'s turn', () => {
  const dummyContext = {
    currentPlayer: {name: 'User 1', color: PlayerColors.red},
    completedPlayer: null,
    myTurn: false
  };
  const { queryByText } = render(
  <SocketContext.Provider value={dummyContext}>
    <InfoboxContainer />
  </SocketContext.Provider>
  );
  const waitingTxt = queryByText('waiting', {exact: false});
  expect(waitingTxt).toBeTruthy();
  expect(waitingTxt).toHaveTextContent(dummyContext.currentPlayer.name);
  expect(queryByText('End Turn', {exact: false})).toBeFalsy();
});

test('Shows game over message when player reaches completion', () => {
    const dummyContext = {
      currentPlayer: {name: 'User 1', color: PlayerColors.red},
      completedPlayer: {name: 'User 2', color: PlayerColors.red},
      myTurn: false
    };
    const { queryByText } = render(
    <SocketContext.Provider value={dummyContext}>
      <InfoboxContainer />
    </SocketContext.Provider>
    );
    const winTxt = queryByText('won', {exact: false});
    expect(winTxt).toBeTruthy();
    expect(winTxt).toHaveTextContent(dummyContext.completedPlayer.name);
    expect(queryByText('End Turn', {exact: false})).toBeFalsy();
  });

test('Shows click to roll message if waiting for dice roll', () => {
    const dummyContext = {
      currentPlayer: {name: 'User 1', color: PlayerColors.red},
      completedPlayer: null,
      myTurn: true,
      canRoll: true,
      availableMoves: []
    };
    const { queryByText } = render(
    <SocketContext.Provider value={dummyContext}>
      <InfoboxContainer />
    </SocketContext.Provider>
    );
    const rollTxt = queryByText('roll', {exact: false});
    expect(rollTxt).toBeTruthy();
    expect(rollTxt).toHaveTextContent(/click/i);
    expect(queryByText('End Turn', {exact: false})).toBeFalsy();
  });

test('Shows move message if waiting for user to move', () => {
    const dummyContext = {
      currentPlayer: {name: 'User 1', color: PlayerColors.red},
      completedPlayer: null,
      myTurn: true,
      canRoll: false,
      availableMoves: [1, 2]
    };
    const { queryByText } = render(
    <SocketContext.Provider value={dummyContext}>
      <InfoboxContainer />
    </SocketContext.Provider>
    );
    const moveTxt = queryByText('move', {exact: false});
    expect(moveTxt).toBeTruthy();
    expect(moveTxt).toHaveTextContent(/click/i);
    expect(queryByText('End Turn', {exact: false})).toBeFalsy();
  });

test('Shows no moves available msg & button if there are no moves', () => {
    const dummyContext = {
      currentPlayer: {name: 'User 1', color: PlayerColors.red},
      completedPlayer: null,
      myTurn: true,
      canRoll: false,
      availableMoves: []
    };
    const { queryByText } = render(
    <SocketContext.Provider value={dummyContext}>
      <InfoboxContainer />
    </SocketContext.Provider>
    );
    const moveTxt = queryByText('move', {exact: false});
    expect(moveTxt).toBeTruthy();
    expect(moveTxt).toHaveTextContent(/no moves available/i);
    expect(queryByText('End Turn', {exact: false})).toBeTruthy();
  });

test('movPiece called when button is clicked', () => {
    const dummyContext = {
      currentPlayer: {name: 'User 1', color: PlayerColors.red},
      completedPlayer: null,
      myTurn: true,
      canRoll: false,
      availableMoves: []
    };
    const { queryByText } = render(
    <SocketContext.Provider value={dummyContext}>
      <InfoboxContainer />
    </SocketContext.Provider>
    );
    const btn = queryByText('End Turn', {exact: false})
    fireEvent.click(btn)
    expect(movePiece).toHaveBeenCalledTimes(1)
    expect(movePiece).toHaveBeenCalledWith(null)
  });