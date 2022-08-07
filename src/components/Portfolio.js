import React from "react";

import Introduce from "./Introduce";
import ProjectPremium from "./ProjectPremium";
import Skills from "./Skills";

// import Projects from "./Projects";
const Portfolio = ({ data }) => {
    // <Projects data={data} />
  return (
    <div className="portfolio" id="portfolio-id">
      <div className="portfolio-container">        <Introduce data={data} />
        <Skills data={data} />
        <ProjectPremium data={data} />
      </div>
    </div>
  );
};

export default Portfolio;
