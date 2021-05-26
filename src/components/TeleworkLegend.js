import "../styles.css";
import React from "react";

const TeleworkLegend = ({ width, transform, mobile }) => {
    return (
      <g 
        className="telework-legend"
        transform={transform}>
        <text 
          className="legend-title"
          transform={`translate(${width/2}, ${-15})`}
        >
            <tspan>more ppl.</tspan>
            <tspan y={10} x={0}>teleworking</tspan>
        </text>
        <line 
          x1={0}
          x2={width}
          strokeDasharray={mobile ? null : "25 1.5"}/>
      </g>
    )
  }

  export default TeleworkLegend;