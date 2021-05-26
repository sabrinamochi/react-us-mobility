import "../styles.css";
import { selectAll } from "d3";

const ScrollingSteps = {
    "park": (direction) => {
      selectAll(".radar").style("opacity", 1)
    },
    "explain": (direction) => {
      if (direction == "down") {
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".low-overall-mobility").style("opacity", 1)
      } else {
        selectAll(".radar").style("opacity", 1)
      }
    },
    "ne-w": (direction) => {
      if (direction == "down") {
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".ne-w").style("opacity", 1)
      } else {
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".low-overall-mobility").style("opacity", 1)
      }
    },
    "mw-s": (direction) => {
      if (direction == "down") {
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".mw-s").style("opacity", 1)
      } else {
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".ne-w").style("opacity", 1)
      }
    },
    "telework": (direction) => {
      if (direction == "down") {
        selectAll(".radar").style("opacity", 1)
        selectAll(".telework").classed("selected-grid", true)
      } else {
        selectAll(".telework").classed("selected-grid", false)
        selectAll(".radar").style("opacity", 0.45)
        selectAll(".mw-s").style("opacity", 1)
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