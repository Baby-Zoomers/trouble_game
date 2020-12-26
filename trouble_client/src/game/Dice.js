import { Component } from 'react';
import { TroubleColors } from '../Colors'



/** UI component to prompt the user to roll the dice and then show the result.
 * Expects to be instantiated inside of an SVG.
*/
class Dice extends Component {

  /** Center points of the dots
   * [ 0 1 2 ]
   * [ 3 4 5 ]
   * [ 6 7 8 ]
   */
  diceDotsParams = {
    0: {cx:387.0, cy: 387.0},
    1: {cx:400.0, cy: 387.0},
    2: {cx:413.0, cy: 387.0},
    3: {cx:387.0, cy: 400.0},
    4: {cx:400.0, cy: 400.0},
    5: {cx:413.0, cy: 400.0},
    6: {cx:387.0, cy: 413.0},
    7: {cx:400.0, cy: 413.0},
    8: {cx:413.0, cy: 413.0},
    fill: '#000000',
    r: 5
  }
  dotsMapping = {
    1: [4],
    2: [0, 8],
    3: [6, 4, 2],
    4: [0, 2, 6, 8],
    5: [0, 2, 6, 8, 4],
    6: [0, 2, 3, 5, 6, 8],
  }

  /** Render the Dots on the dice to show the current roll. 
 * Roll is mapped to a list of dots to draw and then the dots are individually drawn based on their params.
 */
renderDiceDots(){
  const dots = this.dotsMapping[this.props.roll].map( dotNum =>
    <circle
      id={"dot" + dotNum.toString()}
      key={dotNum}
      cx={this.diceDotsParams[dotNum].cx}
      cy={this.diceDotsParams[dotNum].cy}
      fill={this.diceDotsParams.fill}
      r={this.diceDotsParams.r} />
    );

  return (
    <g id="diceDots">
      {dots}
    </g>
  )
}

    render() {
      let onClick = !this.props.disabled ? this.props.onClick : undefined;
        return (
          <g id="dice" onClick={onClick}>

            { this.props.highlighted && <rect stroke={TroubleColors.ringHighlight} strokeWidth="6.7323" id="diceHighlight" width="54" height="54" x="373" y="373"/>
            }
            
            <rect opacity="0.998" fill='#f2f2f2' stroke='#cccccc' strokeWidth='1.77103' id="diceBorder" width="48.228966" height="48.22897" x="375.8855" y="375.8855"/>
            {this.renderDiceDots()}
          </g>
        );
      }

}

export default Dice;