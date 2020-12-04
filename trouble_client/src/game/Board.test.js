import { render } from '@testing-library/react';
import Board from './Board';
import SocketContext from './socket_context/context';

test('renders with DOM tree preserved', () => {
  render(<Board />);
  expect(document.getElementById('SVGRoot').childElementCount).toBeGreaterThan(0);
});


test('all spaces present', () => {
  render(<Board />);
  for(var i = 0; i < 60; i++){
    expect(document.getElementById('space' + i.toString())).toBeTruthy();
  }
});


test('all spaces have an occupied or unoccupied ring (not both)', () => {
  render(<Board />);
  for(var i = 0; i < 60; i++){
    const space = document.getElementById('space' + i.toString());
    const occupied_ring = space.querySelector('.occupied_ring');
    const unoccupied_ring = space.querySelector('.unoccupied_ring'); 

    const o_ring_presesnt = !!occupied_ring;
    const u_ring_presesnt = !!unoccupied_ring;
    
    expect((o_ring_presesnt && !u_ring_presesnt) || (u_ring_presesnt && ! o_ring_presesnt)).toBeTruthy()
  }
});

test('dice dots drawn according to roll', () => {
  const dummyContext = {rollResult: 1, boardState: {spaces: []}};
  const dotsMap = {1: [4], 2: [0, 8], 3: [6, 4, 2], 4: [0, 2, 6, 8], 5: [0, 2, 6, 8, 4], 6: [0, 2, 3, 5, 6, 8]};

  const rerender = () => render(
  <SocketContext.Provider value={dummyContext}>
    <Board />
  </SocketContext.Provider>);

  for(let i=1; i <=6; i++){
    dummyContext.rollResult = i;
    rerender();
    dotsMap[i].forEach(dotNum => {
      const dot = document.getElementById('dot' + dotNum.toString());
      expect(dot).toBeTruthy();
      });
  }
});