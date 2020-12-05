import { render } from '@testing-library/react';
import { PlayerColors, TroubleColors } from '../Colors';
import SocketContext from './socket_context/context';
import TurnStatusIndicator from './TurnStatusIndicator'

test('Turn Status indicator renders player name', () => {
  const dummyContext = {
    currentPlayer: {name: 'User 1', color: PlayerColors.red}
  };
  const { getByText } = render(
  <SocketContext.Provider value={dummyContext}>
    <TurnStatusIndicator />
  </SocketContext.Provider>
  );
  expect(getByText('turn', {exact: false})).toHaveTextContent(dummyContext.currentPlayer.name);
});


test('Turn Status indicator renders background and foreground colors as variants of player color.', () => {
  const dummyContext = {
    currentPlayer: {name: 'User 1', color: PlayerColors.red}
  };
  const { getByText } = render(
  <SocketContext.Provider value={dummyContext}>
    <TurnStatusIndicator />
  </SocketContext.Provider>
  );
  const turnElement = getByText('turn', {exact: false});
  expect(turnElement.style).toHaveProperty('color', expect.color(TroubleColors.redDark));
  expect(turnElement.style).toHaveProperty('background-color', expect.color(TroubleColors.redLight));
});
