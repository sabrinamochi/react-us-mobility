(this["webpackJsonpreact-us-mobility"]=this["webpackJsonpreact-us-mobility"]||[]).push([[0],{7:function(t,e,a){},76:function(t,e,a){"use strict";a.r(e);a(7);var s=a(1),l=a(36),c=a.n(l),n=a(35),o=a(4),r=a(77),i=a(0),d=function(t){var e=t.gridCircleData,a=t.stateAbbr,s=t.radius,l=t.telework;return e.map((function(t){var c;return 2===t&&l>=30&&(c="telework"),Object(i.jsx)("g",{children:Object(i.jsx)("circle",{id:2===t?"".concat(a,"-grid"):null,className:c,r:s/(e.length-1)*t,fill:2===t?"#CDCDCD":"none",stroke:"#fff",fillOpacity:.2,strokeWidth:"us"===a?2.5:1})},"".concat(a,"-").concat(t))}))},h=[["Retail","Recreation"],["Grocery","Pharmacy"],["Parks"],["Transit","Stations"],["Workplaces"]],u=["middle","start","start","end","end"],b=function(t){var e=t.stateAbbr,a=t.mobility,s=t.rScale,l=t.angleSlice;return a.map((function(t,a){return Object(i.jsxs)("g",{children:[Object(i.jsx)("line",{x1:0,y1:0,x2:1.1*s.range()[1]*Math.cos(l*a-Math.PI/2),y2:1.1*s.range()[1]*Math.sin(l*a-Math.PI/2),stroke:"#fff",strokeWidth:"us"===e?2.5:1}),"AK"===e?Object(i.jsx)("text",{className:"legend",textAnchor:u[a],y:1.5*s.range()[1]*Math.sin(l*a-Math.PI/2),children:h[a].map((function(t,e){return Object(i.jsx)("tspan",{x:1.2*s.range()[1]*Math.cos(l*a-Math.PI/2),dy:10*e,children:t})}))}):null,"us"===e?Object(i.jsx)("text",{className:"legend",textAnchor:u[a],y:1.1*s.range()[1]*Math.sin(l*a-Math.PI/2),children:h[a].map((function(t,e){return Object(i.jsx)("tspan",{x:1.1*s.range()[1]*Math.cos(l*a-Math.PI/2),dy:10*e,children:t})}))}):null]},"".concat(e,"-").concat(t))}))},j=function(t){var e=t.stateAbbr,a=t.gridCircleData,s=t.radius;return a.map((function(t){return Object(i.jsx)("g",{children:"us"===e?Object(i.jsx)("text",{className:"legend",y:-s/(a.length-1)*t,dy:"0.8em",children:"".concat(100*(t-1)/2,"%")}):null},"".concat(e,"-").concat(t))}))},f=Object(r.a)(0,3).reverse(),p=function(t){var e=t.stateAbbr,a=t.region,s=t.mobility,l=t.radius,c=t.rScale,n=t.angleSlice,o=t.telework;return Object(i.jsxs)("g",{children:[Object(i.jsx)(d,{gridCircleData:f,stateAbbr:e,region:a,radius:l,telework:o}),Object(i.jsx)(b,{stateAbbr:e,mobility:s,rScale:c,angleSlice:n}),Object(i.jsx)(j,{gridCircleData:f,stateAbbr:e,radius:l})]})},m=a(79),g=a(81),O=function(t){var e=t.data,a=t.rScale,s=t.angleSlice,l=t.colorScale,c=Object(m.a)().curve(g.a).radius((function(t){return t.value>=a.domain()[1]?a.range()[1]:t.value<=a.domain()[0]?a.range()[0]:a(t.value)})).angle((function(t,e){return e*s}));return Object(i.jsx)("path",{d:c(e.values),fill:l(e.residential),stroke:l(e.residential),fillOpacity:.3,strokeWidth:"us"===e.state_abbr?2.5:1.5})},w=function(t){var e=t.data,a=t.stateAbbr,s=t.rScale,l=t.angleSlice,c=t.colorScale,n="us"===a?4:2.5;return e.values.map((function(t,a){var o,r=Math.cos(l*a-Math.PI/2),d=Math.sin(l*a-Math.PI/2);return o=t.value>=s.domain()[1]?s.range()[1]:t.value<=s.domain()[0]?s.range()[0]:s(t.value),Object(i.jsx)("circle",{cx:o*r,cy:o*d,r:n,fill:c(e.residential)},"".concat(t,"+").concat(a))}))},_=function(t){var e=t.data,a=t.stateAbbr,s=t.mobility,l=t.rScale,c=t.angleSlice,n=t.colorScale,o=t.mobile,r={state:e.state,state_abbr:e["State Code"],region:e.Region,percent_telework:e.percent_telework,residential:e.residential_change_diff,values:[]};return s.forEach((function(t,a){r.values.push({type:t,value:e[t]})})),Object(i.jsxs)("g",{children:[Object(i.jsx)(O,{data:r,rScale:l,angleSlice:c,colorScale:n}),Object(i.jsx)(w,{data:r,stateAbbr:a,rScale:l,angleSlice:c,colorScale:n}),"us"!==a?Object(i.jsx)("text",{dy:o&&"AK"!==a?-l.range()[1]:0,className:"state-abbr",children:a}):null]})},x=function(t){var e=t.data,a=t.stateAbbr,s=t.region,l=t.mobility,c=t.radius,n=t.rScale,o=t.angleSlice,r=t.colorScale,d=t.mobile;return Object(i.jsxs)("g",{transform:"us"===a?"translate(0, ".concat(25,")"):"translate(0)",children:[Object(i.jsx)(p,{stateAbbr:a,region:s,mobility:l,radius:c,rScale:n,angleSlice:o,telework:e.percent_telework}),Object(i.jsx)(_,{data:e,stateAbbr:a,mobility:l,rScale:n,angleSlice:o,colorScale:r,mobile:d})]})},y=function(t){var e=t.colorScale,a=t.x,s=t.y,l=t.width,c=t.height;return Object(i.jsxs)("g",{className:"gradient-legend",children:[Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"linear-gradient",children:[Object(i.jsx)("stop",{offset:"0%",stopColor:e.range()[0]}),Object(i.jsx)("stop",{offset:"100%",stopColor:e.range()[1]})]})}),Object(i.jsx)("text",{className:"legend-title",x:a+l/2,y:s-5,children:"time spent at home"}),Object(i.jsx)("rect",{x:a,y:s,width:l,height:c,fill:"url(#linear-gradient)"}),Object(i.jsx)("text",{x:a,y:s+1.8*c,children:"".concat(e.domain()[0],"%")}),Object(i.jsx)("text",{x:a+l,y:s+1.8*c,textAnchor:"end",children:"+".concat(e.domain()[1],"%")})]})},v=window.innerWidth<=768,S={height:0,width:0,stateSize:0,MARGIN:{top:v?80:100,right:v?20:50,bottom:v?20:100,left:v?20:60}},M={retail_recreation_change_diff:2.7419354838709675,groce_pharm_change_diff:3.532258064516129,parks_change_diff:32.6612903225807,transit_change_diff:-.03225806451612903,workplaces_change_diff:-15.387096774193548,residential_change_diff:3.25806451612903},k=Object.keys(M).slice(0,5),N=2*Math.PI/k.length,A=function(t){var e=t.colorScale,a=Object(s.useState)(S),l=Object(o.a)(a,2),c=l[0],r=l[1],d=Object(s.useState)(v),h=Object(o.a)(d,2),u=h[0],b=h[1],j=Object(s.useRef)(null);function f(){if(j.current){b(window.innerWidth<=768);var t=j.current.clientWidth,e={top:u?80:100,right:u?20:50,bottom:u?20:100,left:u?20:60};r({height:1.2*t/2+e.top+e.bottom,width:t,stateSize:0,MARGIN:e})}}Object(s.useEffect)((function(){f(),window.addEventListener("resize",f)}),[j]);var p=c.width/4,m=Object(n.a)().domain([-50,50]).range([0,p]);return Object(i.jsxs)("section",{ref:j,id:"us-overall",className:"mobility-chart",children:[Object(i.jsx)("h3",{children:"Back to the office? Not yet!"}),Object(i.jsx)("svg",{width:c.width,height:c.height,children:Object(i.jsxs)("g",{className:"chart",transform:"translate(".concat(c.width/2,", ").concat(c.height/2,")"),children:[Object(i.jsx)(y,{colorScale:e,x:-c.width/8,y:25-(p+c.MARGIN.top),width:c.width/4,height:20}),Object(i.jsx)(x,{radius:p,mobility:k,rScale:m,angleSlice:N,data:M,stateAbbr:"us",colorScale:e,telework:M.percent_telework})]})})]})},I=a(38),C=a.n(I),R=a(39),D=a.n(R),W=a(2),G=a(25),P=a(20),T=[{state_full:"Example",state_postal:"State",row:-1,column:5},{state_full:"Alabama",state_postal:"AL",row:5,column:6},{state_full:"Alaska",state_postal:"AK",row:-1,column:0},{state_full:"Arizona",state_postal:"AZ",row:4,column:1},{state_full:"Arkansas",state_postal:"AR",row:4,column:4},{state_full:"California",state_postal:"CA",row:3,column:0},{state_full:"Colorado",state_postal:"CO",row:3,column:2},{state_full:"Connecticut",state_postal:"CT",row:2,column:9},{state_full:"District of Columbia",state_postal:"DC",row:4,column:8},{state_full:"Delaware",state_postal:"DE",row:3,column:9},{state_full:"Florida",state_postal:"FL",row:6,column:8},{state_full:"Georgia",state_postal:"GA",row:5,column:7},{state_full:"Hawaii",state_postal:"HI",row:6,column:0},{state_full:"Idaho",state_postal:"ID",row:1,column:1},{state_full:"Illinois",state_postal:"IL",row:1,column:6},{state_full:"Indiana",state_postal:"IN",row:2,column:5},{state_full:"Iowa",state_postal:"IA",row:2,column:4},{state_full:"Kansas",state_postal:"KS",row:4,column:3},{state_full:"Kentucky",state_postal:"KY",row:3,column:5},{state_full:"Louisiana",state_postal:"LA",row:5,column:4},{state_full:"Maine",state_postal:"ME",row:-1,column:10},{state_full:"Maryland",state_postal:"MD",row:3,column:8},{state_full:"Massachusetts",state_postal:"MA",row:1,column:9},{state_full:"Michigan",state_postal:"MI",row:1,column:7},{state_full:"Minnesota",state_postal:"MN",row:1,column:4},{state_full:"Mississippi",state_postal:"MS",row:5,column:5},{state_full:"Missouri",state_postal:"MO",row:3,column:4},{state_full:"Montana",state_postal:"MT",row:1,column:2},{state_full:"Nebraska",state_postal:"NE",row:3,column:3},{state_full:"Nevada",state_postal:"NV",row:2,column:1},{state_full:"New Hampshire",state_postal:"NH",row:0,column:10},{state_full:"New Jersey",state_postal:"NJ",row:2,column:8},{state_full:"New Mexico",state_postal:"NM",row:4,column:2},{state_full:"New York",state_postal:"NY",row:1,column:8},{state_full:"North Carolina",state_postal:"NC",row:4,column:6},{state_full:"North Dakota",state_postal:"ND",row:1,column:3},{state_full:"Ohio",state_postal:"OH",row:2,column:6},{state_full:"Oklahoma",state_postal:"OK",row:5,column:3},{state_full:"Oregon",state_postal:"OR",row:2,column:0},{state_full:"Pennsylvania",state_postal:"PA",row:2,column:7},{state_full:"Rhode Island",state_postal:"RI",row:2,column:10},{state_full:"South Carolina",state_postal:"SC",row:4,column:7},{state_full:"South Dakota",state_postal:"SD",row:2,column:3},{state_full:"Tennessee",state_postal:"TN",row:4,column:5},{state_full:"Texas",state_postal:"TX",row:6,column:3},{state_full:"Utah",state_postal:"UT",row:3,column:1},{state_full:"Vermont",state_postal:"VT",row:0,column:9},{state_full:"Virginia",state_postal:"VA",row:3,column:7},{state_full:"Washington",state_postal:"WA",row:1,column:0},{state_full:"West Virginia",state_postal:"WV",row:3,column:6},{state_full:"Wisconsin",state_postal:"WI",row:1,column:5},{state_full:"Wyoming",state_postal:"WY",row:2,column:2}],E=function(t){var e=Object(s.useState)(null),a=Object(o.a)(e,2),l=a[0],c=a[1];return Object(s.useEffect)((function(){Object(W.a)(t).then((function(t){t.forEach((function(t){T.forEach((function(e){t.state==e.state_full&&(t.row=+e.row,t.column=e.column,t.groce_pharm_change_diff=+t.groce_pharm_change_diff,t.retail_recreation_change_diff=+t.retail_recreation_change_diff,t.transit_change_diff=+t.transit_change_diff,t.workplaces_change_diff=+t.workplaces_change_diff,t.parks_change_diff=+t.parks_change_diff,t.residential_change_diff=+t.residential_change_diff,t.percent_telework=+t.percent_telework)}))})),c(Object(P.a)(new Map(t.map((function(t){return[JSON.stringify(t),t]}))).values()))}))}),[]),l},V=[],z=function(t){var e=t.onChangeTooltipValue,a=t.stateSize,s=t.colorScale,l=t.mobile,c=E("https://gist.githubusercontent.com/sabrinamochi/6b1a8d203618ed230c7254bf8c53dfd2/raw/cd80388fa3b33d48a8e324331bbcb83531c883c8/clean-avg-mobility-data.csv");if(!c)return Object(i.jsx)("pre",{children:"Loading..."});var n=Object.keys(c[0]).slice(2,7);V=Object(P.a)(new Set(n));var o=l?3:5,r=l?12:5,d=function(t){return t.row*(a+r)},h=function(t){return t.column*(a+o)},u=2*Math.PI/V.length,b=a/2,j=Object(W.b)().domain([-50,50]).range([0,b]),f=["MA","VT","MD","NJ","HI","DC","RI","CT"],p=function(){e({value:""},!1)};return c.map((function(t,c){var n=["radar"];return"Northeast"==t.Region||"West"==t.Region?n.push("ne-w"):"Midwest"!=t.Region&&"South"!=t.Region||n.push("mw-s"),f.includes(t["State Code"])&&n.push("low-overall-mobility"),Object(i.jsx)("g",{onMouseOver:function(){return function(t){var s={circleX:h(t)+2*a+10,circleY:d(t)+a/2},l=Object(G.a)(Object(G.a)({},t),s);e(l,!0)}(t)},onMouseOut:p,className:n.join(" "),transform:"translate(".concat(h(t)+a/2,", ").concat(d(t)+a/2,")"),children:Object(i.jsx)(x,{data:t,stateAbbr:t["State Code"],region:t.Region,mobility:V,radius:b,rScale:j,angleSlice:u,colorScale:s,mobile:l})},"".concat(t.state,"-").concat(c))}))},H=function(t){var e=t.width,a=t.transform,s=t.mobile;return Object(i.jsxs)("g",{className:"telework-legend",transform:a,children:[Object(i.jsxs)("text",{className:"legend-title",transform:"translate(".concat(e/2,", ").concat(-15,")"),children:[Object(i.jsx)("tspan",{children:"more ppl."}),Object(i.jsx)("tspan",{y:10,x:0,children:"teleworking"})]}),Object(i.jsx)("line",{x1:0,x2:e,strokeDasharray:s?null:"25 1.5"})]})},K={park:function(t){Object(W.d)(".radar").style("opacity",1)},explain:function(t){"down"==t?(Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".low-overall-mobility").style("opacity",1)):Object(W.d)(".radar").style("opacity",1)},"ne-w":function(t){"down"==t?(Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".ne-w").style("opacity",1)):(Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".low-overall-mobility").style("opacity",1))},"mw-s":function(t){"down"==t?(Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".mw-s").style("opacity",1)):(Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".ne-w").style("opacity",1))},telework:function(t){"down"==t?(Object(W.d)(".radar").style("opacity",1),Object(W.c)(".telework-legend").style("opacity",1),Object(W.d)(".telework").classed("selected-grid",!0)):(Object(W.c)(".telework-legend").style("opacity",0),Object(W.d)(".telework").classed("selected-grid",!1),Object(W.d)(".radar").style("opacity",.45),Object(W.d)(".mw-s").style("opacity",1))},explore:function(t){},invisible:function(t){"down"==t?Object(W.d)(".mobility-chart").style("z-index",1):Object(W.d)(".mobility-chart").style("z-index",-1)}},L=window.innerWidth<=768,J={height:0,width:0,stateSize:0,MARGIN:{top:L?80:100,right:L?20:50,bottom:L?20:100,left:L?20:60}},Y={value:""},U=C()(),F=function(t){var e=t.colorScale,a=Object(s.useState)(J),l=Object(o.a)(a,2),c=l[0],n=l[1],r=Object(s.useState)(L),d=Object(o.a)(r,2),h=d[0],u=d[1],b=Object(s.useState)(Y),j=Object(o.a)(b,2),f=j[0],p=j[1],m=Object(s.useState)(!1),g=Object(o.a)(m,2),O=g[0],w=g[1],_=Object(s.useRef)(null),x=Object(s.useRef)(null);function v(){if(_.current){u(window.innerWidth<=768);var t=_.current.clientWidth,e={top:h?80:100,right:h?20:50,bottom:h?20:100,left:h?20:60},a=(t-e.left-e.right)/12;n({height:h?11*a+e.top+e.bottom:9*a+e.top+e.bottom,width:t,stateSize:a,MARGIN:e})}}function S(t){t.index;var e=t.element,a=t.direction;M=Object(W.c)(e).attr("data-step"),K[M](a)}Object(s.useEffect)((function(){v(),window.addEventListener("resize",v)}),[_,x]);var M="";!function(){if(_.current){var t=Object(W.c)(".mobility-chart");D.a.add(t.node())}if(x.current){var e=Object(W.d)(".scrolling-text");U.setup({step:e.nodes(),offset:.8}).onStepEnter(S)}}();return Object(i.jsxs)("section",{id:"scrolling-map",children:[Object(i.jsxs)("div",{ref:_,className:"mobility-chart",children:[Object(i.jsx)("h3",{children:"Mobility Patterns by State"}),Object(i.jsxs)("div",{style:{position:"relative"},children:[Object(i.jsx)("svg",{width:c.width,height:c.height,children:Object(i.jsxs)("g",{className:"chart",transform:"translate(".concat(c.MARGIN.left,", ").concat(c.MARGIN.top,")"),children:[Object(i.jsx)(y,{colorScale:e,x:c.width/2-c.MARGIN.left-c.width/8,y:-c.MARGIN.top/2,width:c.width/4,height:20}),Object(i.jsx)(H,{transform:"translate(".concat(30+c.width/2-c.MARGIN.left+c.width/8,", ").concat(10-c.MARGIN.top/2,")"),width:h?30:60,mobile:h}),Object(i.jsx)(z,{onChangeTooltipValue:function(t,e){p(t),w(e)},stateSize:c.stateSize,colorScale:e,mobile:h})]})}),Object(i.jsxs)("div",{className:"tooltip",style:{left:h?0:"".concat(f.circleX,"px"),top:h?0:"".concat(f.circleY,"px"),opacity:O?1:0},children:[Object(i.jsx)("h5",{children:f.state}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["retail",Object(i.jsx)("br",{}),"recreation"]}),Object(i.jsx)("p",{children:"".concat(Math.round(10*f.retail_recreation_change_diff)/10,"%")})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["grocery",Object(i.jsx)("br",{}),"pharmacy"]}),Object(i.jsx)("p",{children:"".concat(Math.round(10*f.retail_recreation_change_diff)/10,"%")})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["transit",Object(i.jsx)("br",{}),"stations"]}),Object(i.jsx)("p",{children:"".concat(Math.round(10*f.retail_recreation_change_diff)/10,"%")})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["work",Object(i.jsx)("br",{}),"places"]}),Object(i.jsx)("p",{children:"".concat(Math.round(10*f.retail_recreation_change_diff)/10,"%")})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"parks"}),Object(i.jsx)("p",{children:"".concat(Math.round(10*f.retail_recreation_change_diff)/10,"%")})]})]})]})]}),Object(i.jsxs)("div",{ref:x,className:"scrolling-texts-container",children:[Object(i.jsx)("div",{className:"scrolling-text","data-step":"park",children:Object(i.jsx)("p",{children:"Visits to parks are way above the baseline in almost all states except for D.C. and Hawaii."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"explain",children:Object(i.jsx)("p",{children:"Most areas in the eastern U.S. see people spending more time at home, with D.C. having the most significant increase, more than 10% above the baseline."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"ne-w",children:Object(i.jsx)("p",{children:"In nearly half of the states in northeast and west regions, where many office-based employees remain at home, mobility trends in indoor places, such as shops and train stations, are still below baseline levels."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"mw-s",children:Object(i.jsx)("p",{children:"About two-thirds of the states in the midwest and south regions see commercial activities heating up. Visits to supermarkets, cafes and transit stations reach the baseline. The duration of people staying at home is almost the same as what it was before the pandemic."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"telework",children:Object(i.jsx)("p",{children:"The percentage of people working remotely highly correlates with the changes in mobility patterns. States with more people reporting being able to telework also spend more time at home."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"explore",children:Object(i.jsx)("p",{children:"Hover over each state to see the detailed mobility trends."})}),Object(i.jsx)("div",{className:"scrolling-text","data-step":"invisible",children:Object(i.jsx)("p",{})})]})]})},X=Object(n.a)().domain([0,10]).range(["#ee694b","#38bfcd"]),B=function(){return Object(i.jsxs)("main",{children:[Object(i.jsxs)("section",{className:"content",children:[Object(i.jsx)("h1",{children:"Where People Are Moving Again"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"City streets are getting crowded. Travel plans are ramping up. Restaurants are allowing people to dine in again."}),Object(i.jsx)("p",{children:"After vaccine rollout began last December and restrictions on social distancing have eased, the U.S. is on track to return to normalcy."}),Object(i.jsxs)("p",{children:["Google ",Object(i.jsx)("a",{href:"https://www.google.com/covid19/mobility/",children:"COVID-19 Community Mobility Reports"})," show how visits and length of stay in different locations have changed compared to a baseline period before the pandemic."]})]})]}),Object(i.jsx)(A,{colorScale:X}),Object(i.jsx)("section",{className:"content",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Overall in the U.S., movement of people to shopping centers, grocery stores and train stations is almost the same as what it was during the pre-pandemic days - average mobility trends seen in January and February 2020."}),Object(i.jsx)("p",{children:"However, visits to workplaces are still down by 20% as compared to the baseline."}),Object(i.jsx)("p",{children:"A further inspection of the state-level data reveals that while visits to workplaces remain below the baseline in all states, mobility trends in other locations vary across the country."})]})}),Object(i.jsx)(F,{colorScale:X})]})},Z=document.getElementById("root");c.a.render(Object(i.jsx)(s.StrictMode,{children:Object(i.jsx)(B,{})}),Z)}},[[76,1,2]]]);
//# sourceMappingURL=main.6f3202a7.chunk.js.map