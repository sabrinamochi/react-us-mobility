import { useState, useEffect } from "react";
import { csv, extent } from "d3";
import stateData from "./stateData.js";

const readData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(rawData => {
      rawData.forEach((d) => {
        stateData.forEach((s) => {
          if (d.state == s.state_full) {
            d.row = +s.row;
            d.column = s.column;
            d.groce_pharm_change_diff = +d.groce_pharm_change_diff;
            d.retail_recreation_change_diff = +d.retail_recreation_change_diff;
            d.transit_change_diff = +d.transit_change_diff;
            d.workplaces_change_diff = +d.workplaces_change_diff;
            d.parks_change_diff = +d.parks_change_diff;
            d.residential_change_diff = +d.residential_change_diff;
            d.percent_telework = +d.percent_telework;
            // d.avg_aggr_mobility = (d.groce_pharm_change_diff+
            //   d.retail_recreation_change_diff+
            //   d.transit_change_diff+
            //   d.workplaces_change_diff)/4
          } 
        });
      });
      // drop duplicates
      setData([...new Map(rawData.map(obj => [JSON.stringify(obj), obj])).values()])
    });
  }, []);
  return data;
};

export default readData;
