import React from "react";
import healthyCraves from "../../assets/images/projects/healthycraves.png";
import portfolio from "../../assets/images/projects/htmlportfolio.png";
import freeMaps from "../../assets/images/projects/freemaps.png";
import librofy from "../../assets/images/projects/librofy.png";


function Portfolio() {

  return (
    <div className="portfolio-wrapper">
      <div className="image-container">
        <h1 className="text-center py-5" id="heading">Portfolio</h1>
        <div className="figure">
          <img className="portfolio-image" src={freeMaps} alt="Free Maps Project" />
          <p className="portfolio-text">Free Maps: MERN Stack Application<br/>
          <a href="https://tranquil-garden-66594.herokuapp.com/" target="_blank">Deployed Application</a>
          <br />
          <a href="https://github.com/mbrianna1170/free-maps" target="_blank">GitHub Repo</a></p>
        </div>
       
        <div className="figure">
          <img className="portfolio-image" id="libro-fy" src={librofy} alt="Libro-Fy Project" />
          <p className="portfolio-text">Libro-Fy: Back-End Application<br/>
          <a href="https://infinite-ravine-50293.herokuapp.com/" target="_blank">Deployed Application</a>
          <br />
          <a href="https://github.com/mbrianna1170/libro-fy" target="_blank">GitHub Repo</a></p>
        </div>

        <div className="figure">
          <img className="portfolio-image" src={healthyCraves} alt="Healthy Craves Project" />
          <p className="portfolio-text">Healthy Craves: Front-End Application<br/>
          <a href="https://mariamv29.github.io/healthy-craves/" target="_blank">Deployed Application</a>
          <br />
          <a href="https://github.com/mariamv29/healthy-craves" target="_blank">GitHub Repo</a></p>
        </div>

        <div className="figure">
          <img className="portfolio-image" src={portfolio} alt="Basic Portfolio" />
          <p className="portfolio-text">Simple HTML and CSS Portfolio<br/>
          <a href="https://mbrianna1170.github.io/my-portfolio/" target="_blank">Deployed Application</a>
          <br />
          <a href="https://github.com/mbrianna1170/my-portfolio" target="_blank">GitHub Repo</a></p>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;

