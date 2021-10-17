import React from "react";
import profilePic from "../../assets/images/profile-image2.png";

function About() {
  return (
    <div className="container py-5" id="aboutMeContainer">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img
              className="profilepic"
              src={profilePic}
              alt="profile of person"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12" id="column2">
          <h2 className="about-heading">Hello Everybody</h2>
          <p className="about-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
