import "./styles.css";
import React, {useRef, useEffect, useState, useCallback} from "react";
import scrollama from "scrollama";
import Stickyfill from 'stickyfilljs';
import {selectAll, select, scaleLinear, color} from "d3";
import Map from "./components/Map";
import Grid from "./components/Grid";
import GradientLegend from "./components/GradientLegend";
// import TeleworkLegend from "./components/TeleworkLegend";
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
      ? 60
      : 100,
    right: initialMobile
      ? 20
      : 120,
    bottom: initialMobile
      ? 40
      : 35,
    left: initialMobile
      ? 20
      : 120
  }
};

// set up tooltip
const initialTooltipValue = {
    value: ""
  }
  const scrollyExampleRadarR = 80,
    mobileScreenTopExampleRadarR = 30;

  // initiate scroller
  const scroller = scrollama();

  const UsByState = ({residentialColorScale, mobility, residentialColorColumn}) => {
    const [dimensions,
      setDimensions] = useState(initialDimensions);
    const [mobile,
      setMobile] = useState(initialMobile);
    const [scrollingTextWidth,
      setScrollingTextWidth] = useState(0)
    const [teleworkLegendMarginLeft,
      setTeleworkLegendMarginLeft] = useState(35)
    const [tooltipValue,
      setTooltip] = useState(initialTooltipValue);
    const [hovered,
      setHovered] = useState(false);
    const [colorScale,
      setColorScale] = useState(residentialColorScale);
    const [colorColumn,
      setColorColumn] = useState(residentialColorColumn);

    const teleworkColorScale = () => scaleLinear()
      .domain([10, 40])
      .range(["#858585", "#FFC233"]);

    // update dimensions and provide nodes to scroller after chart and scrolling
    // texts containers are rendered
    const chartContainerRef = useRef(null);
    const textsContainerRef = useRef(null);
    const scrollingTextRef = useRef(null);

    // Scrollytelling set up function to handle scrolling text enter
    let currentStep;
    const handleStepEnter = useCallback(({index, element, direction}) => {
      currentStep = select(element).attr('data-step')
      if (currentStep) {
        ScrollingSteps[currentStep](direction);
        if (currentStep === "telework") {
          setColorScale(teleworkColorScale)
          setColorColumn("percent_telework")
        } else {
          setColorScale(residentialColorScale)
          setColorColumn("residential")
        }
      }
    }, []);

    const setupScroller = useCallback(() => {
      const $graphic = select(".mobility-chart")
      Stickyfill.add($graphic.node());
      const $step = selectAll(".scrolling-text")
      scroller.setup({
        step: $step.nodes(),
        offset: 0.8
      }).onStepEnter(handleStepEnter)
    }, [])

    const updateDimensions = useCallback(() => {
      if (chartContainerRef.current) {
        setMobile(window.innerWidth <= 768
          ? true
          : false)
        const width = chartContainerRef.current.clientWidth,
          MARGIN = {
            top: mobile
              ? 60
              : 100,
            right: mobile
              ? 20
              : 120,
            bottom: mobile
              ? 40
              : 35,
            left: mobile
              ? 20
              : 120
          },
          stateSize = (width - MARGIN.left - MARGIN.right) / 12,
          height = mobile
            ? stateSize * 8.5 + MARGIN.top + MARGIN.bottom
            : stateSize * 7.5 + MARGIN.top + MARGIN.bottom;
        setDimensions({height, width, stateSize, MARGIN});
      }
      if (textsContainerRef.current) {
        setScrollingTextWidth(scrollingTextRef.current.querySelector("p").clientWidth)
        setTeleworkLegendMarginLeft(mobile
          ? 40
          : 35)
        setupScroller()
      }
    }, [])
    useEffect(() => {
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
    }, [chartContainerRef, textsContainerRef, scrollingTextRef]);

    // update tooltip value if user hovers on radar
    const onChangeTooltipHandler = useCallback((t, h) => {
      setTooltip(t);
      setHovered(h)
    }, [])

    const switchColorScale = useCallback(() => {
      if (colorColumn === "residential") {
        setColorColumn("percent_telework")
        setColorScale(teleworkColorScale)
      } else {
        setColorColumn("residential")
        setColorScale(residentialColorScale)
      }
    },[colorColumn])


    return (
      <section id="scrolling-map">
        <div ref={chartContainerRef} className="mobility-chart">
          <div style={{
            position: "relative"
          }}>
            <h3>Mobility by State</h3>
            <p className="chart-subtitle"></p>
            <div id="mobile-radar-legend">
              <svg width={dimensions.width} height={mobileScreenTopExampleRadarR * 3}>
                <g
                  transform={`translate(${dimensions.width / 2}, ${mobileScreenTopExampleRadarR + mobileScreenTopExampleRadarR * 0.6})`}>
                  <Grid
                    stateAbbr={"top-example"}
                    region={null}
                    mobility={mobility}
                    radius={mobileScreenTopExampleRadarR}
                    rScale={scaleLinear()
                    .domain([-50, 50])
                    .range([0, mobileScreenTopExampleRadarR])}
                    angleSlice={(Math.PI * 2) / mobility.length}
                    telework={0}/>
                </g>
              </svg>
            </div>
            <div className="button-container">
              <span>Colored by </span>
              <button onClick={switchColorScale}>
                {colorColumn === "residential" ? `Time spent at home` : `% Teleworking`}
              </button>
            </div>
            <svg width={dimensions.width} height={dimensions.height}>
              <g
                className="chart"
                transform={`translate(${dimensions.MARGIN.left}, ${dimensions.MARGIN.top})`}>
                <GradientLegend
                  colorScale={colorScale}
                  colorColumn={colorColumn}
                  x={mobile
                  ? dimensions.width / 2 - dimensions.MARGIN.left - dimensions.width / 6
                  : dimensions.width / 2 - dimensions.MARGIN.left - dimensions.width / 8}
                  y={- dimensions.MARGIN.top * .95}
                  width={mobile
                  ? dimensions.width / 3
                  : dimensions.width / 4}
                  height={20}
                  forMap={true}/> 
                <Map
                  onChangeTooltipValue={onChangeTooltipHandler}
                  stateSize={dimensions.stateSize}
                  mobility={mobility}
                  colorScale={colorScale}
                  colorColumn={colorColumn}
                  mobile={mobile}/>
              </g>
            </svg>
            <div className="chart-notes">
              <p className="source">Data Source: Google Mobility Reports, Household Pulse Survey <br></br> The baseline represents average mobility trends seen in January and February 2020. Interested in how I conducted the data analysis? View it <a href="https://sabrinamochi.github.io/react-us-mobility/google-mobility-reports-analysis.html">here</a>.</p>
            </div>
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
                <p>{`${Math.round(10 * tooltipValue.groce_pharm_change_diff) / 10}%`}</p>
              </div>
              <div>
                <p>transit<br></br>stations</p>
                <p>{`${Math.round(10 * tooltipValue.transit_change_diff) / 10}%`}</p>
              </div>
              <div>
                <p>work<br></br>places</p>
                <p>{`${Math.round(10 * tooltipValue.workplaces_change_diff) / 10}%`}</p>
              </div>
              <div>
                <p>parks</p>
                <p>{`${Math.round(10 * tooltipValue.parks_change_diff) / 10}%`}</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={textsContainerRef} className="scrolling-texts-container">
          <div ref={scrollingTextRef} className="scrolling-text" data-step="explain">
            <p className="scrolling-text-title">How to read</p>
            <p>
              The further the dot is away from the center, the more people visiting the
              location compared to the pre-pandemic period, and vice versa.
            </p>
            <div>
              <svg width={scrollingTextWidth} height={scrollyExampleRadarR * 3}>
                <g
                  transform={`translate(${scrollingTextWidth / 2}, ${scrollyExampleRadarR + scrollyExampleRadarR * 0.6})`}>
                  <Grid
                    stateAbbr={"example"}
                    region={null}
                    mobility={mobility}
                    radius={scrollyExampleRadarR}
                    rScale={scaleLinear()
                    .domain([-50, 50])
                    .range([0, scrollyExampleRadarR])}
                    angleSlice={(Math.PI * 2) / mobility.length}
                    telework={0}/>
                </g>
              </svg>
            </div>
          </div>
          <div className="scrolling-text" data-step="parks">
            <p className="scrolling-text-title">Parks</p>
            <p>For example, visits to parks are way above the baseline in almost all states
              except for D.C. and Hawaii.</p>
          </div>
          <div className="scrolling-text" data-step="workplaces">
            <p className="scrolling-text-title">Workplaces</p>
            <p>But visits to workplaces remain below the pre-pandemic levels everywhere.
            </p>
          </div>
          <div className="scrolling-text" data-step="dc">
            <p><span className="scrolling-text-title">D.C. has the most significant reduction</span> in mobility patterns. Visits in
              different locations are down to about 40% below pre-pandemic levels.
            </p>
          </div>
          <div className="scrolling-text" data-step="ne">
            <p>
              <span className="scrolling-text-title">Northeastern states</span> still see people spending more time at home. At the beginning of the pandemic,
              this region was hit particularly hard and under more stringent restrictions.</p>
          </div>
          <div className="scrolling-text" data-step="west">
            <p>
              <span className="scrolling-text-title">A few states in the west region</span> see close-to-normal mobility trends in indoor commercial locations, such as
              shops and restaurants.</p>
          </div>
          <div className="scrolling-text" data-step="mw-s">
            <p>
              <span className="scrolling-text-title">About two-thirds of the states in the midwest and south regions </span>
              see commercial activities heating up. Visits to supermarkets, cafes and transit
              stations reach the baseline. The duration of people staying at home is the same
              as what it was before the pandemic.
            </p>
          </div>
          <div className="scrolling-text" data-step="vac">
            <p><span className="scrolling-text-title">Has vaccination changed people's mobility patterns? </span>There's no significant correlation between vaccination rates and mobility
              based on my analysis, echoing a survey result from <a href="https://www.cardify.ai/reports/pandemic-thrivers">Cardify</a>, which concludes that
              higher vaccination rates haven't been the primary driver for economic activity.
            </p>
          </div>
          <div className="scrolling-text" data-step="telework">
            <p>
              <span className="scrolling-text-title">But the percentage of people working remotely </span>
              highly correlates with the changes in mobility patterns. States with more people
              reporting being able to telework also have lower mobility in most locations.</p>
              <br></br>
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
