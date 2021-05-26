import "./styles.css";
import React, {useRef, useEffect, useState} from "react";
import {scaleLinear} from "d3-scale";
import RadarChart from "./components/RadarChart";
import GradientLegend from "./components/GradientLegend";

// define chart dimensions
const initialMobile = window.innerWidth <= 768
  ? true
  : false;

const initialDimensions = {
  height: 0,
  width: 0,
  stateSize: 0,
  MARGIN: {
    top: initialMobile
      ? 80
      : 100,
    right: initialMobile
      ? 20
      : 50,
    bottom: initialMobile
      ? 20
      : 100,
    left: initialMobile
      ? 20
      : 60
  }
};

let data = {
  "retail_recreation_change_diff": 2.7419354838709675,
  "groce_pharm_change_diff": 3.532258064516129,
  "parks_change_diff": 32.6612903225807,
  "transit_change_diff": -0.03225806451612903,
  "workplaces_change_diff": -15.387096774193548,
  "residential_change_diff": 3.25806451612903
}

const gridDomain = Object
  .keys(data)
  .slice(0, 5);

const angleSlice = (Math.PI * 2) / gridDomain.length;

const UsOverall = ({colorScale}) => {
  const [dimensions,
    setDimensions] = useState(initialDimensions);
  const [mobile,
    setMobile] = useState(initialMobile);

  const containerRef = useRef(null);

  function updateDimensions() {
    if (containerRef.current) {
      setMobile(window.innerWidth <= 768
        ? true
        : false)
      const width = containerRef.current.clientWidth,
        MARGIN = {
          top: mobile
            ? 80
            : 100,
          right: mobile
            ? 20
            : 50,
          bottom: mobile
            ? 20
            : 100,
          left: mobile
            ? 20
            : 60
        },
        stateSize = 0,
        height = 1.2 * width / 2 + MARGIN.top + MARGIN.bottom;
      setDimensions({height, width, stateSize, MARGIN});
    }
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  }, [containerRef]);

  const radius = dimensions.width / 4;
  const rScale = scaleLinear()
    .domain([-50, 50])
    .range([0, radius]);

  return (
    <section ref={containerRef} id="us-overall" className="mobility-chart">
      <h3>Back to the office? Not yet!</h3>
      <svg width={dimensions.width} height={dimensions.height}>
        <g
          className="chart"
          transform={`translate(${dimensions.width / 2}, ${dimensions.height / 2})`}>
          <GradientLegend
            colorScale={colorScale}
            x={- dimensions.width / 8}
            y={-(radius + dimensions.MARGIN.top) + 25}
            width={dimensions.width / 4}
            height={20}/>
          <RadarChart
            radius={radius}
            mobility={gridDomain}
            rScale={rScale}
            angleSlice={angleSlice}
            data={data}
            stateAbbr="us"
            colorScale={colorScale}
            telework={data.percent_telework}/>
        </g>
      </svg>
    </section>
  )
}

export default UsOverall;