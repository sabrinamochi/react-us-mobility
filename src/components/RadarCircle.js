import React from "react";


const RadarCircle = ({ data, stateAbbr, rScale, angleSlice, colorScale }) => {
  const dotRadius = stateAbbr === "us" ? 4 : 2.5;

  return data.values.map((d, i) => {
    const posXCal = Math.cos(angleSlice * i - Math.PI / 2);
    const posYCal = Math.sin(angleSlice * i - Math.PI / 2);

    // if it's over 50% or below -50%, don't go beyond the chart
    let modifiedRScale;
    if (d.value >= rScale.domain()[1]) {
      modifiedRScale = rScale.range()[1];
    } else if (d.value <= rScale.domain()[0]) {
      modifiedRScale = rScale.range()[0];
    } else {
      modifiedRScale = rScale(d.value);
    }

    return (
      <circle
        key={`${d}+${i}`}
        cx={modifiedRScale * posXCal}
        cy={modifiedRScale * posYCal}
        r={dotRadius}
        fill={colorScale(data.residential)}
      />
    );
  });
};

export default RadarCircle;
