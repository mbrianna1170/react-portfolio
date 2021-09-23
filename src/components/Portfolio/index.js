import React from "react";
import photo from "../../assets/images/projects/HealthyCraves.png";

function Portfolio() {
    return (
        <section>
            <h1>Project Name</h1>
            <p>Description</p>
            <div className="flex-row">
          <img
            src={photo}
            alt="Project Example"
            className="img-thumbnail mx-1" 
          />
      </div>
        </section>
    );
}

export default Portfolio;