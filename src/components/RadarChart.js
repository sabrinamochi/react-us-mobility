import React from "react";
import Grid from "./Grid";
import Radar from "./Radar";

const RadarChart = ({
  data,
  stateAbbr,
  region,
  mobility,
  radius,
  rScale,
  angleSlice,
  colorScale,
  colorColumn,
  mobile
}) => {

  return (
    <g transform={stateAbbr==="us" ? `translate(0, ${25})` : `translate(0)`}>
      <Grid
        stateAbbr={stateAbbr}
        region={region}
        mobility={mobility}
        radius={radius}
        rScale={rScale}
        angleSlice={angleSlice}
        telework={data.percent_telework}/>
      <Radar
        data={data}
        stateAbbr={stateAbbr}
        mobility={mobility}
        rScale={rScale}
        angleSlice={angleSlice}
        colorScale={colorScale}
        colorColumn={colorColumn}
        mobile={mobile}
        />
    </g>
  )
}

export default RadarChart;