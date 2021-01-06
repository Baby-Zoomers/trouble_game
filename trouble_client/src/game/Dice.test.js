import { render, fireEvent, cleanup } from '@testing-library/react';
import Dice from './Dice';


test('dice dots drawn according to roll', () => {
  const dotsMap = {1: [4], 2: [0, 8], 3: [6, 4, 2], 4: [0, 2, 6, 8], 5: [0, 2, 6, 8, 4], 6: [0, 2, 3, 5, 6, 8]};

  for(let roll=1; roll <=6; roll++){
    render(
      <svg id="SVGRoot" width="200px" height="200px" version="1.1" viewBox="0 0 200 200">
        <Dice roll={roll} disabled={true} highlighted={false} cx="100" cy="100"/>
      </svg>);
    dotsMap[roll].forEach(dotNum => {
      const dot = document.getElementById('dot' + dotNum.toString());
      expect(dot).toBeTruthy();
      });
      cleanup();
  }
});

test('highlight shows only when highlighted', () => {
  // Highlight on
  render(
    <svg id="SVGRoot" width="200px" height="200px" version="1.1" viewBox="0 0 200 200">
      <Dice roll="6" disabled={true} highlighted={true} cx="100" cy="100"/>
    </svg>);
  
  let highlight = document.getElementById('diceHighlight');
  expect(highlight).toBeTruthy();
  cleanup();

  // Highlight off
  render(
    <svg id="SVGRoot" width="200px" height="200px" version="1.1" viewBox="0 0 200 200">
      <Dice roll="6" disabled={true} highlighted={false} cx="100" cy="100"/>
    </svg>);
  
  highlight = document.getElementById('diceHighlight');
  expect(highlight).toBeFalsy();
});

test('click handler called only when enabled', () => {
  const clickHandler = jest.fn();
  // Disabled
  render(
    <svg id="SVGRoot" width="200px" height="200px" version="1.1" viewBox="0 0 200 200">
      <Dice roll="6" disabled={true} highlighted={true} cx="100" cy="100" onClick={clickHandler}/>
    </svg>);
  
  let dice = document.getElementById('dice');
  fireEvent.click(dice);
  expect(clickHandler.mock.calls.length).toBe(0);
  cleanup();

  // Enabled
  render(
    <svg id="SVGRoot" width="200px" height="200px" version="1.1" viewBox="0 0 200 200">
      <Dice roll="6" disabled={false} highlighted={true} cx="100" cy="100" onClick={clickHandler}/>
    </svg>);
  
  dice = document.getElementById('dice');
  fireEvent.click(dice);
  expect(clickHandler.mock.calls.length).toBe(1);
});