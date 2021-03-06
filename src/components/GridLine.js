import React from "react";

const labelTexts = [["Retail","Recreation"], 
  ["Grocery","Pharmacy"],
  ["Parks"],
  ["Transit", "Stations"],
  ["Work","Places"]]

const textAnchorOptions = ["middle", "start", "start", "end", "end"]

const GridLine = ({ stateAbbr, mobility, rScale, angleSlice  }) => {

   return mobility.map((m,i) => (
      <g key={`${stateAbbr}-${m}`}>
        <line
          x1={0}
          y1={0}
          x2={rScale.range()[1] * 1.1 * Math.cos(angleSlice * i - Math.PI / 2)}
          y2={rScale.range()[1] * 1.1 * Math.sin(angleSlice * i - Math.PI / 2)}
          stroke="#fff"
          strokeWidth={stateAbbr === "us" ? 4 : 2} // give overall us radar thicker stroke
        />
        {stateAbbr === "AK"  // if its alaska, give mobility labels
          ? <text className="legend ak-legend" textAnchor={textAnchorOptions[i]} y={rScale.range()[1] * 1.5 * Math.sin(angleSlice * i - Math.PI / 2)}>{labelTexts[i].map((t,idx) => <tspan key={idx} x={rScale.range()[1] * 1.2 * Math.cos(angleSlice * i - Math.PI / 2)} dy={idx*11}>{t}</tspan>)}</text>
          : null
        }
        {stateAbbr === "us" // if its overall us, give mobility labels
          ? <text 
            className="legend" 
            textAnchor={textAnchorOptions[i]} 
            y={rScale.range()[1] * 1.13 * Math.sin(angleSlice * i - Math.PI / 2)}>
              {
              labelTexts[i].map((t,idx) => <tspan key={idx} x={rScale.range()[1] * 1.1 * Math.cos(angleSlice * i - Math.PI / 2)} dy={idx*12}>{t}</tspan>)
              }
            </text>
          : null
        }
        {stateAbbr === "example" | stateAbbr === "top-example" // if its example radar, give mobility labels
          ? <text className="legend" textAnchor={textAnchorOptions[i]} y={rScale.range()[1] * 1.3 * Math.sin(angleSlice * i - Math.PI / 2)}>{labelTexts[i].map((t,idx) => <tspan key={idx} x={rScale.range()[1] * 1.1 * Math.cos(angleSlice * i - Math.PI / 2)} dy={idx*11}>{t}</tspan>)}</text>
          : null
        }
 
        
      </g>
    ))
}

export default GridLine;