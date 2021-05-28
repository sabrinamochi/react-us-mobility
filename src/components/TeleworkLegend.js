import "../styles.css";
import React from "react";

const TeleworkLegend = ({ width, transform, mobile }) => {
    return (
      <g 
        className="telework-legend"
        transform={transform}>
        <text 
          className="legend-title"
          transform={`translate(${width/2}, ${-20})`}
        >
            <tspan>More ppl.</tspan>
            <tspan y={12} x={0}>Teleworking</tspan>
        </text>
        <line 
          x1={0}
          x2={width}
          strokeDasharray={mobile ? null : "25 1.5"}/>
      </g>
    )
  }

  export default TeleworkLegend;