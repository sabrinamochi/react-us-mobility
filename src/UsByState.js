import "./styles.css";
import React, {useRef, useEffect, useState} from "react";
import scrollama from "scrollama";
import Stickyfill from 'stickyfilljs';
import {selectAll, select} from "d3";
import Map from "./components/Map";
import GradientLegend from "./components/GradientLegend";
import TeleworkLegend from "./components/TeleworkLegend";
import ScrollingSteps from "./components/ScrollingSteps";

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

// set up tooltip
const initialTooltipValue = {
  value: ""
}

// initiate scroller
const scroller = scrollama();

const UsByState = ({colorScale}) => {
  const [dimensions,
    setDimensions] = useState(initialDimensions);
  const [mobile,
    setMobile] = useState(initialMobile);
  const [tooltipValue,
    setTooltip] = useState(initialTooltipValue);
  const [hovered,
    setHovered] = useState(false);

  // update dimensions and provide nodes to scroller after chart and scrolling
  // texts containers are rendered
  const chartContainerRef = useRef(null);
  const textsContainerRef = useRef(null);
  function updateDimensions() {
    if (chartContainerRef.current) {
      setMobile(window.innerWidth <= 768
        ? true
        : false)
      const width = chartContainerRef.current.clientWidth,
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
        stateSize = (width - MARGIN.left - MARGIN.right) / 12,
        height = mobile
          ? stateSize * 11 + MARGIN.top + MARGIN.bottom
          : stateSize * 9 + MARGIN.top + MARGIN.bottom;
      setDimensions({height, width, stateSize, MARGIN});

    }
  }
  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  }, [chartContainerRef, textsContainerRef]);

  // console.log(mobile) Scrollytelling
  function handleStepEnter({index, element, direction}) {
    currentStep = select(element).attr('data-step')
    ScrollingSteps[currentStep](direction);
  }

  function setupScroller() {
    if (chartContainerRef.current) {
      const $graphic = select(".mobility-chart")
      Stickyfill.add($graphic.node());
    }
    if (textsContainerRef.current) {
      const $step = selectAll(".scrolling-text")
      scroller.setup({
        step: $step.nodes(),
        offset: 0.8
      }).onStepEnter(handleStepEnter)
    }
  }
  let currentStep = '';
  setupScroller()

  // update tooltip value if user hovers on radar
  const onChangeTooltipHandler = (t, h) => {
    setTooltip(t);
    setHovered(h)
    // console.log(tooltipValue)
  };

  return (
    <section id="scrolling-map">
      <div ref={chartContainerRef} className="mobility-chart">
        <h3>Mobility Patterns by State</h3>
        <div style={{
          position: "relative"
        }}>
          <svg width={dimensions.width} height={dimensions.height}>
            <g
              className="chart"
              transform={`translate(${dimensions.MARGIN.left}, ${dimensions.MARGIN.top})`}>
              <GradientLegend 
                colorScale={colorScale}
                x={dimensions.width / 2 - dimensions.MARGIN.left - dimensions.width / 8}
                y={- dimensions.MARGIN.top / 2}
                width={dimensions.width / 4}
                height={20}/>
              <TeleworkLegend 
                transform={`translate(${30 + dimensions.width / 2 - dimensions.MARGIN.left + dimensions.width / 8 }, ${10 - dimensions.MARGIN.top / 2})`}
                width={mobile ? 30 : 60}
                mobile={mobile}/>
              <Map
                onChangeTooltipValue={onChangeTooltipHandler}
                stateSize={dimensions.stateSize}
                colorScale={colorScale}
                mobile={mobile}/>
            </g>
          </svg>
          <div
            className="tooltip"
            style={{
            left: mobile
              ? 0
              : `${tooltipValue.circleX}px`,
            top: mobile
              ? 0
              : `${tooltipValue.circleY}px`,
            opacity: hovered
              ? 1
              : 0
          }}>
            <h5>{tooltipValue.state}</h5>
            <div>
              <p>retail<br></br>recreation</p>
              <p>{`${Math.round(10 * tooltipValue.retail_recreation_change_diff) / 10}%`}</p>
            </div>
            <div>
              <p>grocery<br></br>pharmacy</p>
              <p>{`${Math.round(10 * tooltipValue.retail_recreation_change_diff) / 10}%`}</p>
            </div>
            <div>
              <p>transit<br></br>stations</p>
              <p>{`${Math.round(10 * tooltipValue.retail_recreation_change_diff) / 10}%`}</p>
            </div>
            <div>
              <p>work<br></br>places</p>
              <p>{`${Math.round(10 * tooltipValue.retail_recreation_change_diff) / 10}%`}</p>
            </div>
            <div>
              <p>parks</p>
              <p>{`${Math.round(10 * tooltipValue.retail_recreation_change_diff) / 10}%`}</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={textsContainerRef} className="scrolling-texts-container">
        <div className="scrolling-text" data-step="park">
          <p>Visits to parks are way above the baseline in almost all states except for
            D.C. and Hawaii.</p>
        </div>
        <div className="scrolling-text" data-step="explain">
          <p>Most areas in the eastern U.S. see people spending more time at home, with
            D.C. having the most significant increase, more than 10% above the baseline.</p>
        </div>
        <div className="scrolling-text" data-step="ne-w">
          <p>In nearly half of the states in northeast and west regions, where many
            office-based employees remain at home, mobility trends in indoor places, such as
            shops and train stations, are still below baseline levels.</p>
        </div>
        <div className="scrolling-text" data-step="mw-s">
          <p>About two-thirds of the states in the midwest and south regions see
            commercial activities heating up. Visits to supermarkets, cafes and transit
            stations reach the baseline. The duration of people staying at home is almost
            the same as what it was before the pandemic.
          </p>
        </div>
        <div className="scrolling-text" data-step="telework">
          <p>The percentage of people working remotely highly correlates with the changes
            in mobility patterns. States with more people reporting being able to telework
            also spend more time at home.
          </p>
        </div>
        <div className="scrolling-text" data-step="explore">
          <p>Hover over each state to see the detailed mobility trends.</p>
        </div>
        <div className="scrolling-text" data-step="invisible">
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default UsByState
