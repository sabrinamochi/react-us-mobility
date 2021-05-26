import React from "react";

const GridLegend = ({stateAbbr, gridCircleData, radius}) => {
  return gridCircleData.map((n) => (
    <g key={`${stateAbbr}-${n}`}>
      {stateAbbr === "us" // if its overall us radar, give percent legend
        ? <text
            className="legend"
            y={-(radius / (gridCircleData.length-1)) * n}
            dy="0.6em">
              {`${100*(n-1)/2}%`}
          </text>
        : null 
      }
    </g>
  ));
};

export default GridLegend;
