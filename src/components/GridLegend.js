import React from "react";

const GridLegend = ({stateAbbr, gridCircleData, radius}) => {
  return gridCircleData.map((n) => (
    <g key={`${stateAbbr}-${n}`}>
      {stateAbbr === "us" | stateAbbr === "example" // if its overall us radar or example radar, give percent legend
        ? <text
            className="legend"
            y={-(radius / (gridCircleData.length-1)) * n}
            dy= {n === 2 ? "1em" : "0.8em"}>
              {n === 2 && 
                `≥+${100*(n-1)/2}%`
              }
              {n === 1 &&
               `No Change`
              }
              {n === 0 && 
                `≤${100*(n-1)/2}%`
              }
          </text>
        : null 
      }
    </g>
  ));
};

export default GridLegend;
