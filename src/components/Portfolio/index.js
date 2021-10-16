import React from "react";
import healthyCraves from "../../assets/images/projects/healthycraves.png";
import freeMaps from "../../assets/images/projects/freemaps.png";


function Portfolio() {

  return (
    <div className="portfolio-wrapper">
      <div className="image-container">
        <h1 className="text-center py-5" id="heading">Portfolio</h1>
          <img className="portfolio-image" src={freeMaps} alt="" />
          {/* - */}
          <img className="portfolio-image" src={freeMaps} alt="" />
          {/* - */}
          <img className="portfolio-image" src={freeMaps} alt="" />
          {/* - */}
          <img className="portfolio-image" src={freeMaps} alt="" />
        </div>
      </div>

  )
}

export default Portfolio;

