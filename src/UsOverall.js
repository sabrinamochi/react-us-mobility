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
    top: 100,
    right: initialMobile
      ? 20
      : 50,
    bottom: initialMobile
      ? 20
      : 10,
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



const UsOverall = ({colorScale, mobility}) => {
  const angleSlice = (Math.PI * 2) / mobility.length;

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
          top: 100,
          right: mobile
            ? 20
            : 50,
          bottom: mobile
            ? 20
            : 0,
          left: mobile
            ? 20
            : 60
        },
        stateSize = 0,
        height = 1.1 * width / 2 + MARGIN.top + MARGIN.bottom;
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
      <h3>The New Normalcy</h3>
      <p className="chart-subtitle">US average mobility between April 7 and May 7, 2021</p>
      <svg width={dimensions.width} height={dimensions.height}>
        <g
          className="chart"
          transform={`translate(${dimensions.width / 2}, ${ (dimensions.height+20) / 2})`}>
          <GradientLegend
            colorScale={colorScale}
            x={mobile ? - dimensions.width / 6 : - dimensions.width / 8}
            y={ -(radius + dimensions.MARGIN.top / 2)}
            width={mobile ?  dimensions.width / 3 : dimensions.width / 4}
            height={20}/>
          <RadarChart
            data={data}
            stateAbbr="us"
            radius={radius}
            mobility={mobility}
            rScale={rScale}
            angleSlice={angleSlice}
            colorScale={colorScale}
            telework={data.percent_telework}/>
        </g>
      </svg>
      <div className="chart-notes">
      <p className="source">Data Source: Google Mobility Reports</p>
        <p>The baseline represents average mobility trends seen in January and February 2020. </p>
      </div>
    </section>
  )
}

export default UsOverall;