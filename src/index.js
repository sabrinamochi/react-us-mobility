import "./styles.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { scaleLinear } from "d3-scale";
import UsOverall from "./UsOverall";
import UsByState from "./UsByState";

const colorScale = scaleLinear()
    .domain([0,10])
    .range(["#ee694b", "#38bfcd"]);

const App = () => {
  return (
    <main>
      <section className="content">
        <h1>Where People Are Moving Again</h1>
        <div>
          <p>City streets are getting crowded. Travel plans are ramping up. Restaurants are allowing people to dine in again.</p>
          <p>After vaccine rollout began last December and restrictions on social distancing have eased, the U.S. is on track to return to normalcy.</p>
          <p>Google <a href="https://www.google.com/covid19/mobility/">COVID-19 Community Mobility Reports</a> show how visits and length of stay in different locations have changed compared to a baseline period before the pandemic.</p>
        </div>
      </section>
      <UsOverall colorScale={colorScale}/>
      <section className="content">
        <div>
          <p>Overall in the U.S., movement of people to shopping centers, grocery stores and train stations is almost the same as what it was during the pre-pandemic days - average mobility trends seen in January and February 2020.</p>
          <p>However, visits to workplaces are still down by 20% as compared to the baseline.</p>
          <p>A further inspection of the state-level data reveals that while visits to workplaces remain below the baseline in all states, mobility trends in other locations vary across the country.</p>
        </div>
      </section>
      <UsByState colorScale={colorScale}/>
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
