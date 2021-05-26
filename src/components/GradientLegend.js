import "../styles.css";
import React from "react";

const GradientLegend = ({colorScale, x, y, width, height}) => {
    return (
      <g className="gradient-legend">
        <defs>
          <linearGradient id="linear-gradient">
            <stop offset="0%" stopColor={colorScale.range()[0]}></stop>
            <stop offset="100%" stopColor={colorScale.range()[1]}></stop>
          </linearGradient>
        </defs>
        <text className="legend-title" x={x+width/2} y={y - 5}>Time spent at home</text>
        <rect x={x} y={y} width={width} height={height} fill="url(#linear-gradient)"/>
        <text x={x} y={y+height*1.8}>{`${colorScale.domain()[0]}%`}</text>
        <text x={x+width} y={y+height*1.8} textAnchor="end">{`+${colorScale.domain()[1]}%`}</text>
      </g>
    )
  }

  export default GradientLegend