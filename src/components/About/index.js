import React from 'react';
import profilePic from "../../assets/images/profile-image2.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hello There</h1>
      <p></p>
      <img src={profilePic} className="profile-picture" alt="profile of person" />
    </section>
  );
}

export default About;