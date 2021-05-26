import React from "react";

const GridCircle = ({gridCircleData, stateAbbr, radius, telework}) => {
  return gridCircleData.map((n) => {
    let assignedClassName;
    if ((n === 2) && (telework >= 30)){
      assignedClassName = "telework"
    } 
    return (
      <g key={`${stateAbbr}-${n}`}>
        <circle 
          id={n === 2 // only give id to the biggest circle grid
          ? `${stateAbbr}-grid`
          : null}
          className={assignedClassName}
          r={(radius / (gridCircleData.length - 1)) * n}
          fill={n === 2 // only give fill color to the biggest circle grid
          ? "#CDCDCD"
          : "none"}
          stroke="#fff"
          fillOpacity={0.2}
          strokeWidth={stateAbbr === "us" // if its overall us radar chart, give thicker stroke
          ? 2.5
          : 1}/>
      </g>
    )
  });
};

export default GridCircle;
