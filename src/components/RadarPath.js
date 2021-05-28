import React from "react";
import { lineRadial, curveCardinalClosed } from "d3-shape";

const RadarPath = ({ data, stateAbbr, rScale, angleSlice, colorScale }) => {
  // radial line generator, thanks to d3 woo hoo! 
  const radarLine = lineRadial()
    .curve(curveCardinalClosed)
    .radius((d) => {
      // if it's over 50% or below -50%, don't go beyond the chart
      if (d.value >= rScale.domain()[1]) {
        return rScale.range()[1];
      } else if (d.value <= rScale.domain()[0]) {
        return rScale.range()[0];
      } else {
        return rScale(d.value);
      }
    })
    .angle((d, i) => i * angleSlice);
  return (
      <path
        className="radar-path"
        d={radarLine(data.values)}
        fill={colorScale(data.residential)}
        stroke={colorScale(data.residential)}
        fillOpacity={.3}
        strokeWidth={stateAbbr === "us" ? 3 : 1.5}
      />
    
  );
};

export default RadarPath;
