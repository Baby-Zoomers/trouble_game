import React, { Component } from 'react';

var currentAvailablePieces = [];
var currentSuggestionPieces = [];
var selectedPieceId = null;
var colorToUpdate = null;
 
class Board extends Component {
   render() {
    return (
<svg id="SVGRoot" width="800px" height="800px" version="1.1" viewBox="0 0 800 800"> 
  <g id="layer1">
    <rect id="rect36" x="50" y="50" width="700" height="700" fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="2"/>
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
      <text id="use3626" transform="rotate(45)" x="537.79474" y="424.8432" lineHeight="1.25" >
        <tspan id="tspan3634" x="537.79474" y="424.8432" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3628" transform="rotate(135)" x="-26.732204" y="-141.04245" lineHeight="1.25" >
        <tspan id="tspan3638" x="-26.732204" y="-141.04245" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3630" transform="rotate(225)" x="-592.61786" y="423.4845" lineHeight="1.25" >
        <tspan id="tspan3642" x="-592.61786" y="423.4845" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3632" transform="rotate(-45)" x="-28.09091" y="989.37012" lineHeight="1.25" >
        <tspan id="tspan3646" x="-28.09091" y="989.37012" fontSize="18.667px">Home</tspan>
      </text>
      <text id="use3684" transform="rotate(45)" x="358.04095" y="52.590488" lineHeight="1.25" >
        <tspan id="tspan3692" x="358.04095" y="52.590488" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3686" transform="rotate(135)" x="-205.14441" y="-513.11621" lineHeight="1.25" >
        <tspan id="tspan3696" x="-205.14441" y="-513.11621" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3688" transform="rotate(225)" x="-770.85114" y="50.06913" lineHeight="1.25" >
        <tspan id="tspan3700" x="-770.85114" y="50.06913" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3690" transform="rotate(-45)" x="-207.66577" y="615.77588" lineHeight="1.25" >
        <tspan id="tspan3704" x="-207.66577" y="615.77588" fontSize="18.667px">Finish</tspan>
      </text>
      <text id="use3726" transform="rotate(45)" x="482.87833" y="279.75162" lineHeight="1.25" >
        <tspan id="tspan3734" x="482.87833" y="279.75162" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3728" transform="rotate(135)" x="-79.140892" y="-284.98907" lineHeight="1.25" >
        <tspan id="tspan3738" x="-79.140892" y="-284.98907" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3730" transform="rotate(225)" x="-644.03284" y="278.23462" lineHeight="1.25" >
        <tspan id="tspan3742" x="-644.03284" y="278.23462" fontSize="18.667px">Start</tspan>
      </text>
      <text id="use3732" transform="rotate(-45)" x="-76.263458" y="845.65198" lineHeight="1.25" >
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
    <g id="space0">
      <circle id="circle2910" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2912" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2914" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space1" transform="rotate(12.857 400.26 399.29)">
      <circle id="circle2694" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2696" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2698" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space2" transform="rotate(25.714 400.26 399.29)">
      <circle id="circle2702" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2704" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2706" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space3" transform="rotate(38.571 400.26 399.29)">
      <circle id="circle2710" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2712" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2714" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space4" transform="rotate(51.428 400.26 399.29)">
      <circle id="circle2718" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2720" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2722" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space5" transform="rotate(64.285 400.26 399.29)">
      <circle id="circle2726" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2728" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2730" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space6" transform="rotate(77.142 400.26 399.29)">
      <circle id="circle2734" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2736" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2738" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space7" transform="rotate(89.999 400.26 399.29)">
      <circle id="circle2742" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2744" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2746" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space8" transform="rotate(102.86 400.26 399.29)">
      <circle id="circle2750" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2752" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2754" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space9" transform="rotate(115.71 400.26 399.29)">
      <circle id="circle2758" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2760" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2762" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space10" transform="rotate(128.57 400.26 399.29)">
      <circle id="circle2766" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2768" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2770" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space11" transform="rotate(141.43 400.26 399.29)">
      <circle id="circle2774" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2776" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2778" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ffc107" strokeWidth="6.7323"/>
    </g>
    <g id="space12" transform="rotate(154.28 400.26 399.29)">
      <circle id="circle2782" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2784" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2786" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space13" transform="rotate(167.14 400.26 399.29)">
      <circle id="circle2790" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2792" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2794" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space14" transform="rotate(180 400.26 399.29)">
      <circle id="circle2798" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2800" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2802" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space15" transform="rotate(192.86 400.26 399.29)">
      <circle id="circle2806" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2808" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2810" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space16" transform="rotate(205.71 400.26 399.29)">
      <circle id="circle2814" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2816" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2818" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space17" transform="rotate(218.57 400.26 399.29)">
      <circle id="circle2822" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2824" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2826" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space18" transform="rotate(231.43 400.26 399.29)">
      <circle id="circle2830" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2832" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2834" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space19" transform="rotate(244.28 400.26 399.29)">
      <circle id="circle2838" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2840" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2842" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space20" transform="rotate(257.14 400.26 399.29)">
      <circle id="circle2846" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2848" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2850" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space21" transform="rotate(270 400.26 399.29)">
      <circle id="circle2854" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2856" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2858" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space22" transform="rotate(-77.146 400.26 399.29)">
      <circle id="circle2862" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2864" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2866" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space23" transform="rotate(-64.289 400.26 399.29)">
      <circle id="circle2870" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2872" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2874" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space24" transform="rotate(-51.432 400.26 399.29)">
      <circle id="circle2878" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2880" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2882" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space25" transform="rotate(-38.575 400.26 399.29)">
      <circle id="circle2886" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2888" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2890" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space26" transform="rotate(-25.718 400.26 399.29)">
      <circle id="circle2894" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2896" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2898" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="space27" transform="rotate(-12.861 400.26 399.29)">
      <circle id="circle2902" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
      <ellipse id="ellipse2904" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
      <ellipse id="ellipse2906" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
    </g>
    <g id="use3157" transform="rotate(180 205.21 465.68)">
      <g id="space47" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3165" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3167" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3169" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space46" transform="rotate(45 -186.8 559)">
        <circle id="circle3173" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3175" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3177" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space45" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3181" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3183" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3185" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space44" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3189" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3191" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3193" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3159" transform="rotate(-90 138.69 271.73)">
      <g id="space51" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3199" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3201" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3203" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space50" transform="rotate(45 -186.8 559)">
        <circle id="circle3207" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3209" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3211" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space49" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3215" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3217" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3219" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ffc107" strokeWidth="6.7323"/>
      </g>
      <g id="g3768" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3223" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3225" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3227" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3161" transform="translate(387.91 -133.03)">
      <g id="space55" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3233" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3235" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3237" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space54" transform="rotate(45 -186.8 559)">
        <circle id="circle3241" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3243" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3245" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space53" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3249" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3251" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3253" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space52" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3257" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3259" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3261" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3163" transform="rotate(90 271.73 659.64)">
      <g id="space59" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3267" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3269" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3271" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space58" transform="rotate(45 -186.8 559)">
        <circle id="circle3275" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3277" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3279" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space57" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3283" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3285" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3287" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space56" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3291" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3293" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3295" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3303" transform="translate(.68078 3.3287)">
      <g id="space43" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3529" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3531" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3533" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space42" transform="rotate(45 -186.8 559)">
        <circle id="circle3537" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3539" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3541" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space41" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3545" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3547" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3549" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space40" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3553" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3555" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3557" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3305" transform="rotate(90 397.71 398.36)">
      <g id="space31" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3495" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3497" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3499" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space30" transform="rotate(45 -186.8 559)">
        <circle id="circle3503" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3505" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3507" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space29" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3511" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3513" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3515" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space28" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3519" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3521" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3523" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3307" transform="rotate(180 399.37 398.02)" >
      <g id="space35" transform="rotate(45 -159.91 494.08)" onClick = {function(){
      var pieceName = "space35";
      var pieceOnBoard = document.getElementById(pieceName);
      var unoccupiedPart = pieceOnBoard.getElementsByClassName("unoccupied_ring")[0];
      var occupiedPart = pieceOnBoard.getElementsByClassName("occupied_ring")[0];
      occupiedPart.style.opacity = 0.500;
      
      //onClick = {function(){var element = document.getElementById("ellipse3463");element.style.display = "block";}}/>
    }}>
        <circle id="circle3461" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737" />
        
        <ellipse id="ellipse3463" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="block" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3465" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space34" transform="rotate(45 -186.8 559)">
        <circle id="circle3469" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3471" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3473" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space33" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3477" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3479" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3481" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space32" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3485" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3487" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3489" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
    <g id="use3309" transform="rotate(-90 401.04 397.68)">
      <g id="space39" transform="rotate(45 -159.91 494.08)">
        <circle id="circle3427" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3429" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3431" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space38" transform="rotate(45 -186.8 559)">
        <circle id="circle3435" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3437" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3439" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space37" transform="rotate(45 -213.69 623.93)">
        <circle id="circle3443" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3445" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3447" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
      <g id="space36" transform="rotate(45 -240.59 688.85)">
        <circle id="circle3451" class="unoccupied_ring" cx="85.97" cy="400" r="12.632" opacity=".998" stroke="#000" strokeWidth="14.737"/>
        <ellipse id="ellipse3453" class="occupied_ring" cx="85.97" cy="400" rx="14.211" ry="14.211" display="none" opacity=".998" stroke="#fffc7d" strokeWidth="16.579"/>
        <ellipse id="ellipse3455" class="suggestion_ring" cx="85.97" cy="400" rx="19.134" ry="19.134" display="none" opacity=".998" stroke="#ff9800" strokeWidth="6.7323"/>
      </g>
    </g>
  </g>
  <g id="layer2">
    <g id="g925" transform="matrix(.46241 .46241 -.46241 .46241 400 30.074)">
      <rect id="rect862" x="300.92" y="300.92" width="198.15" height="198.15" opacity=".998"/>
      <circle id="path864" cx="400" cy="400" r="75" fill="#f2f2f2" opacity=".998"/>
      <rect id="rect882" x="369.6" y="360.51" width="48.229" height="48.229" fill="#f2f2f2" opacity=".998" stroke="#ccc" strokeWidth="1.771"/>
      <g id="g910" transform="translate(.61793 -.069003)">
        <circle id="path884" transform="rotate(47.319)" cx="549.94" cy="-8.1222" r="7" opacity=".998"/>
        <circle id="path884-3" transform="rotate(47.319)" cx="549.29" cy="-28.191" r="7" opacity=".998"/>
        <circle id="path884-36" transform="rotate(47.319)" cx="548.64" cy="-48.259" r="7" opacity=".998"/>
      </g>
    </g>
  </g>
</svg>
    );
  }
}

function updateAllAvailablePieces(availablePieces){
  // call the backend for available pieces
  // Input: Array of availablePieces
  // Outcome: Highlight all available pieces
  availablePieces.forEach(pieceId => {
    var pieceName = "space" + pieceId.toString();
    var pieceOnBoard = document.getElementById(pieceName);
    var occupiedPart = pieceOnBoard.getElementsByClassName("occupied_ring")[0];
    occupiedPart.style.opacity = 0.500;
  });
  currentAvailablePieces = availablePieces; 
}

function updateAllSuggestionPieces(suggestionPieces){
  // call the backend for suggestion pieces
  // Input: Array of suggestion Pieces
  // Outcome: Show suggestion rings for suggestion pieces
  suggestionPieces.forEach(pieceId =>{
    var pieceName = "space" + pieceId.toString();
    var pieceOnBoard = document.getElementById(pieceName);
    var suggestiondPart = pieceOnBoard.getElementsByClassName("suggestion_ring")[0];
    suggestiondPart.display = "block";
  });
  currentSuggestionPieces = suggestionPieces;
}

function pieceClickHandler(currentPieceId){
  // Input: pieceid
  if(currentAvailablePieces.length === 0){
    if(selectedPieceId !== null){
      // Select the piece to move. 
      if(currentSuggestionPieces.length === 0){
        // No place to move
        alert("You have no way to turn. Waste a chance");
      }
      else{
        // Update the currentPiece to occuplied and all other suggestion piece to non_occupied
        var flag = currentSuggestionPieces.find(pieceId => pieceId === currentPieceId);
        if( flag !== undefined){
          currentSuggestionPieces.forEach(pieceId =>{
            var pieceName = "space" + pieceId.toString();
            var pieceOnBoard = document.getElementById(pieceName);
            var suggestiondPart = pieceOnBoard.getElementsByClassName("suggestion_ring")[0];
            suggestiondPart.setAttribute("display","none");
            if(pieceId === currentPieceId){
              var occupiedPart =  pieceOnBoard.getElementsByClassName("occupied_ring")[0];
              occupiedPart.setAttribute("stroke",colorToUpdate);
            }
          });
          // Todo: Send the request to the backend to see whether he/she wins
        }
      }
    }
  }
  else{
    // Update the currentPiece to unoccupied. Set the other pieces as before
    var flag = currentAvailablePieces.find(pieceId => pieceId === currentPieceId);
    if(flag !== undefined){
    currentAvailablePieces.forEach(pieceId =>{
      var pieceName = "space" + pieceId.toString();
      var pieceOnBoard = document.getElementById(pieceName);
      var occupiedPart = pieceOnBoard.getElementsByClassName("occupied_ring")[0];
      if(currentPieceId === pieceId){
        occupiedPart.setAttribute("stroke","#000");
        selectedPieceId = currentPieceId;
        colorToUpdate = occupiedPart.getAttribute("stroke");
      }
      else{
        occupiedPart.style.opacity = .998;
      }
    });
    currentAvailablePieces = [];
     // Todo: Send selectedPieceId to the backend
  }
}
}

export default Board;
