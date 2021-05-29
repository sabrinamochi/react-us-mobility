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
  "parks": (direction) => {
    if (direction == "down") {
      selectAll(".radar-path").classed("show", false)
      selectAll(".radar-circle").classed("show", false)
      selectAll(".radar-circle-parks_change_diff").classed("show", true)
      selectAll(".ak-legend").classed("show", true)
    } else {
      selectAll(".radar-circle-parks_change_diff").classed("show", false)
      selectAll(".radar-path").classed("show", true)
      selectAll(".radar-circle").classed("show", true)
    }
  },
  "workplaces": (direction) => {
    if (direction == "down") {
      selectAll(".radar-circle-parks_change_diff").classed("show", false)
      selectAll(".radar-circle-workplaces_change_diff").classed("show", true)
    } else {
      selectAll(".radar-circle-workplaces_change_diff").classed("show", false)
      selectAll(".radar-circle-parks_change_diff").classed("show", true)
    }
  },
  "dc": (direction) => {
    if (direction == "down") {
      selectAll(".radar-circle-workplaces_change_diff").classed("show", false)
      selectAll(".DC-radar path, .DC-radar circle").classed("show", true)
    } else {
      selectAll(".DC-radar path, .DC-radar circle").classed("show", false)
      selectAll(".radar-circle-workplaces_change_diff").classed("show", true)
    }
  },
  "ne": (direction) => {
    if (direction == "down") {
      selectAll(".DC-radar path, .DC-radar circle").classed("show", false)
      selectAll(".ne path, .ne circle").classed("show", true)
    } else {
      selectAll(".ne path, .ne circle").classed("show", false)
      selectAll(".DC-radar path, .DC-radar circle").classed("show", true)
    }
  },
  "west": (direction) => {
    if (direction == "down") {
      selectAll(".ne path, .ne circle").classed("show", false)
      selectAll(".west path, .west circle").classed("show", true)
    } else {
      selectAll(".west path, .west circle").classed("show", false)
      selectAll(".ne path, .ne circle").classed("show", true)
    }
  },
  "mw-s": (direction) => {
    if (direction == "down") {
      selectAll(".west path, .west circle").classed("show", false)
      selectAll(".mw-s path, .mw-s circle").classed("show", true)
    } else {
      selectAll(".mw-s path, .mw-s circle").classed("show", false)
      selectAll(".west path, .west circle").classed("show", true)
    }
  },
  "vac": (direction) => {
    if (direction == "down") {
      selectAll(".west path, .west circle").classed("show", false)
      selectAll(".radar-path").classed("show", true)
      selectAll(".radar-circle").classed("show", true)

    } else {
      selectAll(".radar-path").classed("show", false)
      selectAll(".radar-circle").classed("show", false)
      selectAll(".west path, .west circle").classed("show", true)
    }
  },
  "telework": (direction) => {
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