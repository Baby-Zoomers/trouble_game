import { render } from '@testing-library/react';
import Board from './Board';

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
