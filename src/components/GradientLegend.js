import "../styles.css";
import React from "react";

const GradientLegend = ({colorScale, colorColumn, x, y, width, height, forMap}) => {
    if (!forMap) {colorColumn = "residential";}
    return (
      <g className="gradient-legend">
        <defs>
          <linearGradient id={`${colorColumn}-linear-gradient`}>
            <stop offset="0%" stopColor={colorScale.range()[0]}></stop>
            <stop offset="100%" stopColor={colorScale.range()[1]}></stop>
          </linearGradient>
        </defs>
        <text className="legend-title" x={x+width/2} y={y - 5}>
          {forMap ? null : "Time Spent At Home"}
        </text>
        <rect x={x} y={y} width={width} height={height} fill={`url(#${colorColumn}-linear-gradient)`}/>
        <text x={x} y={y+height*1.8}>{colorColumn === "residential" ?  `No Change` : `${colorScale.domain()[0]}%`}</text>
        <text x={x+width} y={y+height*1.8} textAnchor="end">{colorColumn === "residential" ? `≥+${colorScale.domain()[1]}%` : `≥${colorScale.domain()[1]}%`}</text>
      </g>
    )
  }

  export default GradientLegend