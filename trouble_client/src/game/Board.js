import { Component } from 'react';
import SocketContext from './socket_context/context';
import { movePiece } from './socket_context/sockets/emit'
 
class Board extends Component {
  static contextType = SocketContext;
  
  spaceParams = {
    0: {cx: 85.97, cy: 400},  // Space 0
    1: {cx: 93.69, cy: 330.05},  // Space 1
    2: {cx: 116.784, cy: 263.567},  // Space 2
    3: {cx: 154.091, cy: 203.892},  // Space 3
    4: {cx: 203.741, cy: 154.015},  // Space 4
    5: {cx: 263.246, cy: 116.436},  // Space 5
    6: {cx: 329.62, cy: 93.04},  // Space 6
    7: {cx: 399.536, cy: 85},  // Space 7
    8: {cx: 469.489, cy: 92.7196},  // Space 8
    9: {cx: 535.97, cy: 115.811},  // Space 9
    10: {cx: 595.645, cy: 153.117},  // Space 10
    11: {cx: 645.524, cy: 202.767},  // Space 11
    12: {cx: 683.104, cy: 262.27},  // Space 12
    13: {cx: 706.5, cy: 328.645},  // Space 13
    14: {cx: 714.542, cy: 398.56},  // Space 14
    15: {cx: 706.823, cy: 468.514},  // Space 15
    16: {cx: 683.733, cy: 534.995},  // Space 16
    17: {cx: 646.428, cy: 594.671},  // Space 17
    18: {cx: 596.779, cy: 644.55},  // Space 18
    19: {cx: 537.276, cy: 682.131},  // Space 19
    20: {cx: 470.903, cy: 705.529},  // Space 20
    21: {cx: 400.987, cy: 713.572},  // Space 21
    22: {cx: 331.034, cy: 705.854},  // Space 22
    23: {cx: 264.552, cy: 682.765},  // Space 23
    24: {cx: 204.875, cy: 645.462},  // Space 24
    25: {cx: 154.996, cy: 595.813},  // Space 25
    26: {cx: 117.413, cy: 536.311},  // Space 26
    27: {cx: 94.0141, cy: 469.938},  // Space 27
    28: {cx: 80.5549, cy: 195.226},  // Space 28
    29: {cx: 118.587, cy: 157.194},  // Space 29
    30: {cx: 156.619, cy: 119.162},  // Space 30
    31: {cx: 194.651, cy: 81.1302},  // Space 31
    32: {cx: 604.172, cy: 80.5279},  // Space 32
    33: {cx: 642.204, cy: 118.56},  // Space 33
    34: {cx: 680.236, cy: 156.592},  // Space 34
    35: {cx: 718.268, cy: 194.624},  // Space 35
    36: {cx: 718.87, cy: 604.145},  // Space 36
    37: {cx: 680.838, cy: 642.177},  // Space 37
    38: {cx: 642.806, cy: 680.209},  // Space 38
    39: {cx: 604.774, cy: 718.241},  // Space 39
    40: {cx: 195.253, cy: 718.843},  // Space 40
    41: {cx: 157.221, cy: 680.811},  // Space 41
    42: {cx: 119.189, cy: 642.779},  // Space 42
    43: {cx: 81.1572, cy: 604.747},  // Space 43
    44: {cx: 215.848, cy: 215.847},  // Space 44
    45: {cx: 253.88, cy: 253.879},  // Space 45
    46: {cx: 291.912, cy: 291.911},  // Space 46
    47: {cx: 329.944, cy: 329.943},  // Space 47
    48: {cx: 582.482, cy: 215.848},  // Space 48
    49: {cx: 544.45, cy: 253.88},  // Space 49
    50: {cx: 506.418, cy: 291.912},  // Space 50
    51: {cx: 468.386, cy: 329.944},  // Space 51
    52: {cx: 582.481, cy: 582.482},  // Space 52
    53: {cx: 544.449, cy: 544.45},  // Space 53
    54: {cx: 506.417, cy: 506.418},  // Space 54
    55: {cx: 468.385, cy: 468.386},  // Space 55
    56: {cx: 215.847, cy: 582.481},  // Space 56
    57: {cx: 253.879, cy: 544.449},  // Space 57
    58: {cx: 291.911, cy: 506.417},  // Space 58
    59: {cx: 329.943, cy: 468.385},  // Space 59
    numSpaces: 60
  }
  ringParams = {
    unoccupied: {r: 12.632, stroke: "#000000", strokeWidth: 14.737},
    occupied: {r: 14.211, stroke: "#ffffff", strokeWidth: 16.579},
    highlight: {r: 19.134, stroke: "#ff9800", strokeWidth: 6.7323},
  }
  textParams = {
    lineHeight: 1.25
  }
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

   
  /** Render an individual space
   * @param spaceNumber {int} space number to render
   * @param spaceState {SpaceState} object representing the state of the space
   * @returns JSX code necessary to render in the SVG
  */
  renderSpace(spaceNumber, spaceState, myTurn, currentPlayer, availableMoves){
    const params = this.spaceParams[spaceNumber];
    const id = "space" + spaceNumber.toString();
    let onClick;
    let spaceBody;

    if (myTurn && availableMoves.reduce((acc, piece) => acc || piece.space === spaceNumber, false)) {
      onClick = () => {
        console.log(spaceNumber);
        movePiece({ player: currentPlayer, space: spaceNumber });
      }
    }

    if (spaceState.occupied){
      spaceBody = <circle onClick={onClick} className="occupied_ring" cx={params.cx} cy={params.cy} r={this.ringParams.occupied.r} stroke={spaceState.color} strokeWidth={this.ringParams.occupied.strokeWidth} />;
    } else {
      spaceBody = <circle className="unoccupied_ring" cx={params.cx} cy={params.cy} r={this.ringParams.unoccupied.r}  stroke={this.ringParams.unoccupied.stroke} strokeWidth={this.ringParams.unoccupied.strokeWidth} />;
    }

    return(
      <g id={id} key={id}>
        {spaceBody}
        { spaceState.highlighted && <circle className="highlight_ring" cx={params.cx} cy={params.cy} r={this.ringParams.highlight.r} stroke={this.ringParams.highlight.stroke} strokeWidth={this.ringParams.highlight.strokeWidth}/> }
      </g>
    )
  }

/** Render the Dots on the dice to show the current roll. 
 * Roll is mapped to a list of dots to draw and then the dots are individually drawn based on their params.
 */
  renderDiceDots(){
    const dots = this.dotsMapping[this.context.rollResult].map( dotNum =>
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
    return (
<svg id="SVGRoot" width="800px" height="800px" version="1.1" viewBox="0 0 800 800">  
  <g id="layer1">
    <rect id="rect36" x="0" y="0" width="800" height="800" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="2"/>
    <circle id="path912-2" cx="400" cy="400" r="314.03" fill="none" opacity=".998" stroke="#d0e0f2" strokeWidth="50"/>
    <g id="layer4">
      <path id="use3600" d="m468.39 329.94 114.1-114.1 12.189-63.947" fill="none" stroke="#f2c94c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60"/>
      <path id="use3598" d="m329.94 329.94-114.1-114.1-63.947-12.189" fill="none" stroke="#2f80ed" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60"/>
      <path id="use3596" d="m329.94 468.39-114.1 114.1-12.189 63.947" fill="none" stroke="#27ae60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60"/>
      <path id="use3594" d="m468.39 468.39 114.1 114.1 63.947 12.189" fill="none" stroke="#eb5757" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60"/>
      <path id="use3317" d="m604.77 718.24 114.1-114.1" fill="none" stroke="#eb5757" strokeLinecap="round" strokeWidth="60"/>
      <path id="use3315" d="m718.27 194.62-114.1-114.1" fill="none" stroke="#f2c94c" strokeLinecap="round" strokeWidth="60"/>
      <path id="use3313" d="m194.65 81.131-114.1 114.1" fill="none" stroke="#2f80ed" strokeLinecap="round" strokeWidth="60"/>
      <path id="use3311" d="m81.158 604.75 114.1 114.1" fill="none" stroke="#27ae60" strokeLinecap="round" strokeWidth="60"/>
      <circle id="use3752" cx="155" cy="595.81" r="30" fill="#27ae60" opacity=".998"/>
      <circle id="use3754" transform="rotate(90)" cx="154.38" cy="-203.57" r="30" fill="#2f80ed" opacity=".998"/>
      <circle id="use3756" transform="scale(-1)" cx="-645" cy="-202.96" r="30" fill="#f2c94c" opacity=".998"/>
      <circle id="use3758" transform="rotate(-90)" cx="-644.38" cy="596.42" r="30" fill="#eb5757" opacity=".998"/>
    </g>
    <g id="layer5" fill="#000000" fontFamily="sans-serif" fontSize="40px">
      <text id="use3626" transform="rotate(45)" x="537.79474" y="424.8432" style={this.textParams} >
        <tspan id="tspan3634" x="537.79474" y="424.8432" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3628" transform="rotate(135)" x="-26.732204" y="-141.04245" style={this.textParams} >
        <tspan id="tspan3638" x="-26.732204" y="-141.04245" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3630" transform="rotate(225)" x="-592.61786" y="423.4845" style={this.textParams} >
        <tspan id="tspan3642" x="-592.61786" y="423.4845" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3632" transform="rotate(-45)" x="-28.09091" y="989.37012" style={this.textParams} >
        <tspan id="tspan3646" x="-28.09091" y="989.37012" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3684" transform="rotate(45)" x="358.04095" y="52.590488" style={this.textParams} >
        <tspan id="tspan3692" x="358.04095" y="52.590488" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3686" transform="rotate(135)" x="-205.14441" y="-513.11621" style={this.textParams} >
        <tspan id="tspan3696" x="-205.14441" y="-513.11621" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3688" transform="rotate(225)" x="-770.85114" y="50.06913" style={this.textParams} >
        <tspan id="tspan3700" x="-770.85114" y="50.06913" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3690" transform="rotate(-45)" x="-207.66577" y="615.77588" style={this.textParams} >
        <tspan id="tspan3704" x="-207.66577" y="615.77588" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3726" transform="rotate(45)" x="482.87833" y="279.75162" style={this.textParams} >
        <tspan id="tspan3734" x="482.87833" y="279.75162" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3728" transform="rotate(135)" x="-79.140892" y="-284.98907" style={this.textParams} >
        <tspan id="tspan3738" x="-79.140892" y="-284.98907" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3730" transform="rotate(225)" x="-644.03284" y="278.23462" style={this.textParams} >
        <tspan id="tspan3742" x="-644.03284" y="278.23462" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3732" transform="rotate(-45)" x="-76.263458" y="845.65198" style={this.textParams} >
        <tspan id="tspan3746" x="-76.263458" y="845.65198" fontSize="18.667px">Start</tspan>
      </text>
    </g>
  </g>
  <g id="layer3" fill="none">
    <g id="g2226" display="none">
      <path id="path912" d="m714.03 400c0 173.43-140.6 314.03-314.03 314.03s-314.03-140.6-314.03-314.03c0-51.799 12.542-100.67 34.754-143.74 52.159-101.14 157.64-170.29 279.28-170.29 173.43 1e-6 314.03 140.6 314.03 314.03z" opacity=".998" stroke="#b3b3b3" strokeWidth="2.5122"/>
      <path id="path2219" d="m400 85.97v628.06" stroke="#000" strokeWidth="1px"/>
      <path id="path2221" d="m714.03 400h-628.06" stroke="#000" strokeWidth="1px"/>
    </g>
    {/* Render all the spaces */}
    { Object.keys(this.context.boardState.spaces).map((spaceNum) => this.renderSpace(spaceNum, this.context.boardState.spaces[spaceNum], this.context.myTurn, this.context.currentPlayer, this.context.availableMoves)) }  
  </g>
  <g id="layer2">
    <g id="g925" >
      <rect id="rect862" x="332.24" y="332.24" width="135.52" height="135.52" transform="rotate(-45.00,400.00, 400.00)" opacity=".998"/>
      <circle id="path864" cx="400" cy="400" r="60.0" fill="#f2f2f2" opacity=".998"/>
      <g id="dice">
        <rect opacity="0.998" fill='#f2f2f2' stroke='#cccccc' strokeWidth='1.77103' id="diceBorder" width="48.228966" height="48.22897" x="375.8855" y="375.8855" />
        {this.renderDiceDots()}
      </g>
    </g>
  </g>
</svg>
    );
  }
}

export default Board;
