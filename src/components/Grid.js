import React from "react";
import { range } from "d3-array";
import GridCircle from "./GridCircle";
import GridLine from "./GridLine";
import GridLegend from "./GridLegend";

// create data for grid circles
// each radar has two grid circles
const axisCircleNum = 2;
const gridCircleData = range(0, axisCircleNum + 1).reverse();

const Grid = ({
  stateAbbr,
  region,
  mobility,
  radius,
  rScale,
  angleSlice,
  telework
}) => {
  return (
    <g>
      <GridCircle 
        gridCircleData={gridCircleData} 
        stateAbbr={stateAbbr}
        region={region}
        radius={radius} 
        telework={telework}/>
      <GridLine
        stateAbbr={stateAbbr}
        mobility={mobility}
        rScale={rScale}
        angleSlice={angleSlice}
      />
      <GridLegend
        gridCircleData={gridCircleData} 
        stateAbbr={stateAbbr} 
        radius={radius}
        />
    </g>
  );
};

export default Grid;
