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
  dotsParams = {
    0: {cx:14.0, cy: 14.0},
    1: {cx:27.0, cy: 14.0},
    2: {cx:40.0, cy: 14.0},
    3: {cx:14.0, cy: 27.0},
    4: {cx:27.0, cy: 27.0},
    5: {cx:40.0, cy: 27.0},
    6: {cx:14.0, cy: 40.0},
    7: {cx:27.0, cy: 40.0},
    8: {cx:40.0, cy: 40.0},
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
  borderParams = {
    stroke: '#cccccc',
    strokeWidth: 1.78,
    fill: '#f2f2f2',
    width:48,
    height:48,
  }
  highlightParams = {
    stroke: TroubleColors.ringHighlight,
    strokeWidth: 6.8,
  }
  height = 54
  width = 54

  /** Render the Dots on the dice to show the current roll. 
 * Roll is mapped to a list of dots to draw and then the dots are individually drawn based on their params.
 */
renderDots(){
  const dots = this.dotsMapping[this.props.roll].map( dotNum =>
    <circle
      id={"dot" + dotNum.toString()}
      key={dotNum}
      cx={this.dotsParams[dotNum].cx}
      cy={this.dotsParams[dotNum].cy}
      fill={this.dotsParams.fill}
      r={this.dotsParams.r} />
    );

  return (
    <g id="diceDots">
      {dots}
    </g>
  )
}

renderBorder() {
  let xStart = this.width /2 - this.borderParams.width /2;
  let yStart = this.height /2 - this.borderParams.height /2;
  return <rect fill={this.borderParams.fill} stroke={this.borderParams.stroke} strokeWidth={this.borderParams.strokeWidth} id="diceBorder" width={this.borderParams.width} height={this.borderParams.height} x={xStart} y={yStart}/>;
}

renderHighlight() {
  if (!this.props.highlighted){ 
    return undefined;
  }

  return <rect  stroke={this.highlightParams.stroke} strokeLinejoin="round" strokeWidth={this.highlightParams.strokeWidth} id="diceHighlight" width={this.width} height={this.height} x="0" y="0"/>;
}

    render() {
      let onClick = !this.props.disabled ? this.props.onClick : undefined;
      let xOffset = this.props.cx - this.width/2;
      let yOffset = this.props.cy - this.height/2;
      let transform = "translate(" + xOffset + " " + yOffset + ")";
        return (
          <g id="dice" onClick={onClick} transform={transform}>
            {this.renderHighlight()}
            {this.renderBorder()}
            {this.renderDots()}
          </g>
        );
      }

}

export default Dice;