/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css";
import MIN from "../assets/min.png";
import WHITE from "../assets/white.png";
import YELLOW from "../assets/yellow.png";
import prism from "../assets/21232.png";
import beryl from "../assets/21455.png";

const resources = [
  {
    resource: [
      "Beryllium Ore",
      "Prismstone",
    ],
    job: "Miner",
    location: {
      zone: "Il Mheg",
      teleport: "Lydha Lran",
      pos: [30, 21],
    },
    times: [4, 16],
  },
  {
    resource: [
      "Duskblooms",
    ],
    job: "Gatherer",
    location: {
      zone: "Amh Araeng",
      teleport: "The Inn at Journey's Head",
      pos: [32, 33],
    },
    times: [4, 16],
  },
  {
    resource: [
      "Purpure Shell Chip",
    ],
    job: "Miner",
    location: {
      zone: "The Tempest",
      teleport: "The Ondo Cups",
      pos: [34, 31],
    },
    times: [6, 18],
  },
  {
    resource: [
      "Ethereal Cocoon",
    ],
    job: "Gatherer",
    location: {
      zone: "Lakeland",
      teleport: "Fort Jobb",
      pos: [26, 11],
    },
    times: [8, 20],
  },
  {
    resource: [
      "Merbau Log",
    ],
    job: "Gatherer",
    location: {
      zone: "Il Mheg",
      teleport: "Wolekdorf",
      pos: [37, 27],
    },
    times: [8, 20],
  },
  {
    resource: [
      "Tungsten Ore",
    ],
    job: "Miner",
    location: {
      zone: "The Tempest",
      teleport: "The Ondo Cups",
      pos: [33, 8],
    },
    times: [10, 22],
  },
  {
    resource: [
      "Ashen Alumen",
    ],
    job: "Miner",
    location: {
      zone: "Amh Araeng",
      teleport: "Mord Souq",
      pos: [20, 9],
    },
    times: [10, 22],
  },
  {
    resource: [
      "Sandalwood Log",
      "Sandalwood Sap",
    ],
    job: "Gatherer",
    location: {
      zone: "The Rak'tika Greatwood",
      teleport: "Slitherbough",
      pos: [24, 36],
    },
    times: [2, 14],
  },
  {
    resource: [
      "Fireheart Cobalt",
    ],
    job: "Miner",
    location: {
      zone: "Lakeland",
      teleport: "The Ostall Imperative",
      pos: [5, 34],
    },
    times: [2, 14],
  },
  {
    resource: [
      "Imperial Fern",
    ],
    job: "Gatherer",
    location: {
      zone: "Kholusia",
      teleport: "Stilltide",
      pos: [28, 21],
    },
    times: [0, 12],
  },
];

const App = () => (
  <div className="idk">
    <div className="card-container">
      <Card />
      <Card />
      <Card2 />
      <Card2 />
      <Card2 />
      <Card2 />
      <Card />
      <Card2 />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

const Card = () => (
  <div className="card">

    <div className="title-container">
      <div className="teleport">The Inn at Journey's Head</div>
      <div className="timer">7:00</div>
    </div>

    <div className="resource-container">
      <img src={MIN} className="skill-icon" />

      <div className="resource">
        <img src={beryl} className="icon" />
        {/* <img src={WHITE} className="scrip-icon" /> */}
        <div className="name">Beryllium Ore</div>
      </div>

      <div className="resource">
        <img src={prism} className="icon" />
        <div className="name">Prismstone</div>
        <img src={WHITE} className="scrip-icon" />
      </div>
    </div>


    <div className="info-container">
      {/* <div className="teleport">Lydha Lran</div> */}
      {/* <img src={MIN} className="image" /> */}
      <div className="zone">Il Mheg - (31, 20)</div>
      {/* <div className="pos"></div> */}
      <div className="time">4:00 & 16:00</div>
    </div>

  </div>
);

const Card2 = () => (
  <div className="card">

    <div className="title-container">
      <div className="teleport">The Inn at Journey's Head</div>
      <div className="timer">7:00</div>
    </div>

    <div className="resource-container">
      <img src={MIN} className="skill-icon" />

      <div className="resource">
        <img src={beryl} className="icon" />
        {/* <img src={WHITE} className="scrip-icon" /> */}
        <div className="name">Beryllium Ore</div>
        <img src={WHITE} className="scrip-icon" />

      </div>
    </div>


    <div className="info-container">
      {/* <div className="teleport">Lydha Lran</div> */}
      {/* <img src={MIN} className="image" /> */}
      <div className="zone">Il Mheg - (31, 20)</div>
      {/* <div className="pos"></div> */}
      <div className="time">4:00 & 16:00</div>
    </div>

  </div>
);


export default App;
