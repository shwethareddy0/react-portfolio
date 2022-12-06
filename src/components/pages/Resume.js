import React from "react";

function Resume() {
  return (
    <div className="text-left section">
      <h4>Resume</h4>
      <p>
        Download my{" "}
        <a href="Resume.pdf" dowmload="resume">
          resume
        </a>
        <br />
        <br />
        <h5>Front-end proficiencies</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h5>Back-end proficiencies</h5>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDb, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </p>
    </div>
  );
}
export default Resume;
