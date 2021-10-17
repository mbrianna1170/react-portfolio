import React from "react";

function Resume() {
  return (
    <div className="skills">
      <box className="skillBox">
      <h1>Front-End Skills</h1>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>CSS and Sass</li>
        </ul>
      </box>

      <box className="skillBox">
      <h1>Back-End Skills</h1>
        <ul>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MYSQL</li>
          <li>Express.js</li>
          <li>Handlebars.js</li>
        </ul>
      </box>
    </div>
  );
}

export default Resume;
