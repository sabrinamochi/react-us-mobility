import "./styles.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { scaleLinear } from "d3-scale";
import UsOverall from "./UsOverall";
import UsByState from "./UsByState";


const colorScale = () => (scaleLinear()
    .domain([0,10])
    .range(["#38BFCD", "#EE694B"]));
  
const mobility = [
"retail_recreation_change_diff",
"groce_pharm_change_diff",
"parks_change_diff",
"transit_change_diff",
"workplaces_change_diff"
]

const App = () => {
  return (
    <main>
      <section className="content">
        <h1>Where People Are Moving Again</h1>
        <div>
          <p>City streets are getting crowded, airplanes are filling up, and restaurants are allowing people to dine in again. </p>
          <br></br>
          <p>As vaccine rollout began last December and restrictions on social distancing have eased, America is on track to return to normalcy.  </p>
          <br></br>
          <p>Google COVID-19 Community Mobility Reports show how visits and length of stay in different locations have changed compared to a baseline period before the pandemic.</p>
        </div>
      </section>
      <UsOverall residentialColorScale={colorScale()} mobility={mobility} residentialColorColumn="residential"/>
      <section className="content">
        <div>
          <p>Across the U.S., movement of people to shopping centers, grocery stores and train stations is almost the same as what it was during the pre-pandemic days.</p>
          <br></br>
          <p>However, visits to workplaces are still down 20% from the baseline.  </p>
          <br></br>
          <p>A further inspection of the state-level data reveals that while visits to workplaces remain below the baseline in all states, mobility trends in other locations vary across the country. </p>
        </div>
      </section>
      <UsByState residentialColorScale={colorScale} mobility={mobility} residentialColorColumn="residential"/>
    </main>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
