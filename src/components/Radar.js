import React from "react";
import RadarPath from "./RadarPath";
import RadarCircle from "./RadarCircle";

const Radar = ({
  data,
  stateAbbr,
  mobility,
  rScale,
  angleSlice,
  colorScale,
  colorColumn,
  mobile
}) => {
  // prepare data for radar chart
  const radarData = {
    state: data.state,
    state_abbr: data["State Code"],
    region: data.Region,
    percent_telework: data.percent_telework,
    residential: data.residential_change_diff,
    values: []
  };
  mobility.forEach((m, i) => {
    radarData.values.push({
      type: m,
      value: data[m]
    });
  });
  
  return (
    <g>
      <RadarPath
        data={radarData}
        stateAbbr={stateAbbr}
        rScale={rScale}
        angleSlice={angleSlice}
        colorScale={colorScale}
        colorColumn={colorColumn}
      />
      <RadarCircle
        data={radarData}
        stateAbbr={stateAbbr}
        rScale={rScale}
        angleSlice={angleSlice}
        colorScale={colorScale}
        colorColumn={colorColumn}
        mobile={mobile}
      />
      { stateAbbr !== "us" // if its us radar chart, don't put state label in the middle 
        ? <text 
            dy={mobile && stateAbbr !== "AK" ? -rScale.range()[1] : 0}
            className="state-abbr">
            {stateAbbr}
          </text>
        : null
      }
    </g>
  );
};

export default Radar;
