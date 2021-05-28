import "../styles.css";
import {select, selectAll} from "d3";

const ScrollingSteps = {
  "explain": (direction) => {
    if (direction == "down") {
      selectAll(".radar-path").classed("show", true)
      selectAll(".radar-circle").classed("show", true)
    } else {
      selectAll(".radar-path").classed("show", false)
      selectAll(".radar-circle").classed("show", false)
    }
  },
  "park": (direction) => {
    if (direction == "down") {
      selectAll(".radar-path").classed("show", false)
      selectAll(".radar-circle").classed("show", false)
      selectAll(".radar-circle-parks_change_diff").classed("show", true)
      selectAll(".ak-legend").classed("show", true)
    } else {
      selectAll(".radar-path").classed("show", true)
      selectAll(".radar-circle").classed("show", true)
    }
  },
  "east": (direction) => {
    if (direction == "down") {
      selectAll(".radar-circle-parks_change_diff").classed("show", false)
      selectAll(".low-overall-mobility path, .low-overall-mobility circle")
        .classed("show", true)
    } else {
      selectAll(".low-overall-mobility path, .low-overall-mobility circle")
        .classed("show", false)
      selectAll(".radar-circle-parks_change_diff").classed("show", true)
    }
  },
  "ne-w": (direction) => {
    if (direction == "down") {
      selectAll(".low-overall-mobility path, .low-overall-mobility circle")
        .classed("show", false)
      selectAll(".ne-w path, .ne-w circle")
        .classed("show", true)
    } else {
      selectAll(".ne-w path, .ne-w circle")
        .classed("show", false)
      selectAll(".low-overall-mobility path, .low-overall-mobility circle")
        .classed("show", true)
    }
  },
  "mw-s": (direction) => {
    if (direction == "down") {
      selectAll(".ne-w path, .ne-w circle")
        .classed("show", false)
      selectAll(".mw-s path, .mw-s circle")
        .classed("show", true)
    } else {
      selectAll(".mw-s path, .mw-s circle")
        .classed("show", false)
      selectAll(".ne-w path, .ne-w circle")
        .classed("show", true)
    }
  },
  "telework": (direction) => {
    if (direction == "down") {
      selectAll(".radar-path").classed("show", true)
      selectAll(".radar-circle").classed("show", true)
      select(".telework-legend").style("opacity", 1)
      selectAll(".telework").classed("selected-grid", true)
    } else {
      selectAll(".radar-path").classed("show", false)
      selectAll(".radar-circle").classed("show", false)
      select(".telework-legend").style("opacity", 0)
      selectAll(".telework").classed("selected-grid", false)
      selectAll(".mw-s path, .mw-s circle")
        .classed("show", true)
    }
  },
  "explore": (direction) => {
    return;
  },
  "invisible": (direction) => {
    if (direction == "down") {
      selectAll(".mobility-chart").style("z-index", 1)
    } else {
      selectAll(".mobility-chart").style("z-index", -1)
    }
  }
}

export default ScrollingSteps;