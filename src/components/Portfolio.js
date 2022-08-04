import React from "react";

import Introduce from "./Introduce";
import Skills from "./Skills";
import Projects from "./Projects";
const Portfolio = ({ data }) => {
  return (
    <div className="portfolio" id="portfolio-id">
      <div className="portfolio-container">
        <Introduce data={data} />
        <Skills data={data} />
        <Projects data={data} />

      </div>
    </div>
  );
};

export default Portfolio;
