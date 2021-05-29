import React from "react";
import {scaleLinear} from "d3";
import readData from "../data/readData.js";
import RadarChart from "./RadarChart";

// mobility data url
const csvUrl = "https://gist.githubusercontent.com/sabrinamochi/6b1a8d203618ed230c7254bf8c53dfd2" +
    "/raw/cd80388fa3b33d48a8e324331bbcb83531c883c8/clean-avg-mobility-data.csv";

const Map = ({onChangeTooltipValue, stateSize, mobility, colorScale, colorColumn, mobile}) => {
  // load data
  const data = readData(csvUrl);
  if (!data) {
    return <pre>Loading...</pre>;
  } 
  // define padding
  const statePaddingX = mobile
    ? 3
    : 5;
  const statePaddingY = mobile
    ? 12
    : 5;

  // function to calculate state location
  const y_row = ({row}) => row * (stateSize + statePaddingY);
  const x_column = ({column}) => column * (stateSize + statePaddingX);

  const angleSlice = (Math.PI * 2) / mobility.length;

  const radius = stateSize / 2;
  const rScale = scaleLinear()
    .domain([-50, 50])
    .range([0, radius]);

  const selNeStates = [
    "NY",
    "NJ",
    "MA",
    "VT",
    "RI",
    "CT",
    "NH",
    "ME"
  ];

  const selWStates = [
   "AK","WA","OR","ID","NV","UT","AZ",
   "MT","WY"
  ];

  const selMwAndSStates = [
    "SD","NE","KS","OK","IA","MO","AR",
    "WI", "IN", "KY","TN","MS","IL","OH",
    "NC", "AL", "SC", "GA"
  ];

  const handleMouseOver = (selData) => {
    const circlePosition = {
      circleX:x_column(selData) + stateSize * 2.2,
      circleY: y_row(selData) + stateSize / 2
    }
    const updatedData = {
      ...selData,
      ...circlePosition
    }
    onChangeTooltipValue(updatedData, true)
  }

  const handleMouseOut = () => {
    onChangeTooltipValue({
      value: ""
    }, false)
  }

  return data.map((d, i) => {
    const assignedClassName = ["radar", `${d["State Code"]}-radar`];
    if (selNeStates.includes(d["State Code"])) {
      assignedClassName.push("ne");
    } else if (selWStates.includes(d["State Code"])) {
      assignedClassName.push("west");
    } else if (selMwAndSStates.includes(d["State Code"])) {
      assignedClassName.push("mw-s");
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
          mobility={mobility}
          radius={radius}
          rScale={rScale}
          angleSlice={angleSlice}
          colorScale={colorScale}
          colorColumn={colorColumn}
          mobile={mobile}/>
      </g>
    )
  });
};

export default Map;
