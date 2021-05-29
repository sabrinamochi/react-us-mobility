import React, {useRef, useEffect} from "react";
import {select} from "d3";


const RadarCircle = ({ data, stateAbbr, rScale, angleSlice, colorScale, colorColumn }) => {
  const dotRadius = stateAbbr === "us" ? 5 : 3;
  const circleTooltipRef = useRef(null);

  const handleMouseOver = (d, cx, cy) => {
    if(circleTooltipRef.current){
      const leftCircle = (d.type.includes("transit")|d.type.includes("work")) ? true : false;
        select(circleTooltipRef.current)
        .attr("opacity", 1)
        .attr("text-anchor", leftCircle ? "end" : "start")
        .attr("x", leftCircle ? cx-10 : cx+10)
        .attr("y", cy)
        .text(d.value > 0 ? `+${Math.round(100*d.value)/100}%` : `${Math.round(100*d.value)/100}%`)
    }
  }
  const handleMouseOut = () => {
    if(circleTooltipRef.current){
        select(circleTooltipRef.current)
        .attr("opacity", 0)
    }
  }

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
      <g key={`${d}+${i}`}>
        <circle
          onMouseOver={stateAbbr === "us" ? () => handleMouseOver(d, modifiedRScale * posXCal, modifiedRScale * posYCal) : null}
          onMouseOut={handleMouseOut}
          className={`radar-circle radar-circle-${d.type}`}
          cx={modifiedRScale * posXCal}
          cy={modifiedRScale * posYCal}
          r={dotRadius}
          fill={colorScale(data[colorColumn])}
        />
        {stateAbbr === "us" && 
            <text ref={circleTooltipRef} className="radar-circle-legend"></text>
        }
      </g>

    );
  });
};

export default RadarCircle;
