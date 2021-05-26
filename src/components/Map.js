import React from "react";
import {scaleLinear} from "d3";
import readData from "../data/readData.js";
import RadarChart from "./RadarChart";


// mobility data url
const csvUrl = "https://gist.githubusercontent.com/sabrinamochi/6b1a8d203618ed230c7254bf8c53dfd2" +
    "/raw/cd80388fa3b33d48a8e324331bbcb83531c883c8/clean-avg-mobility-data.csv";
let gridDomain = [];

const Map = ({ onChangeTooltipValue, stateSize, colorScale, mobile}) => {
  // load data
  const data = readData(csvUrl);
  if (!data) {
    return <pre>Loading...</pre>;
  } else {
    // update radar grid domain
    const mobility = Object
      .keys(data[0])
      .slice(2, 7);
    gridDomain = [...new Set(mobility)];
    // // del park gridDomain.splice(2, 1)
  }

  // define padding
  const statePaddingX = mobile ? 3 : 5;
  const statePaddingY = mobile ? 12 : 5;

  // function to calculate state location
  const y_row = ({row}) => row * (stateSize + statePaddingY);
  const x_column = ({column}) => column * (stateSize + statePaddingX);

  const angleSlice = (Math.PI * 2) / gridDomain.length;

  const radius = stateSize / 2;
  const rScale = scaleLinear()
    .domain([-50, 50])
    .range([0, radius]);

  const lowerMobilityStates = [
    "MA",
    "VT",
    "MD",
    "NJ",
    "HI",
    "DC",
    "RI",
    "CT"
  ];
  const handleMouseOver = (selData) => {
    const circlePosition = { 
      circleX: x_column(selData) + stateSize * 2 + 10, 
      circleY: y_row(selData) + stateSize / 2
    } 
    const updatedData = {
    ...selData,   ...circlePosition }
    onChangeTooltipValue(updatedData, true)
  }

  const handleMouseOut = () => {
    onChangeTooltipValue({value: ""}, false)
  }

  return data.map((d, i) => {
    const assignedClassName = ["radar"];
    if (d.Region == "Northeast" || d.Region == "West") {
      assignedClassName.push("ne-w");
    } else if (d.Region == "Midwest" || d.Region == "South") {
      assignedClassName.push("mw-s");
    }
    if (lowerMobilityStates.includes(d["State Code"])) {
      assignedClassName.push("low-overall-mobility")
    }
    return (
      <g
        onMouseOver={() => handleMouseOver(d)}
        onMouseOut={handleMouseOut}
        className={assignedClassName.join(" ")}
        key={`${d.state}-${i}`}
        transform={`translate(${x_column(d) + stateSize / 2}, ${y_row(d) + stateSize / 2})`}>
        <RadarChart
          data={d}
          stateAbbr={d["State Code"]}
          region={d.Region}
          mobility={gridDomain}
          radius={radius}
          rScale={rScale}
          angleSlice={angleSlice}
          colorScale={colorScale}
          mobile={mobile}/>
      </g>
    )
  });
};

export default Map;
