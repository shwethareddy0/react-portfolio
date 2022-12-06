import React from "react";

// card to display project information
function ProjectCard(props) {
  return (
    <div className="card">
      <a className="nav-link active title" href={props.project.link}>
        {props.project.title}
      </a>{" "}
      <a className="nav-link active" href={props.project.repo}>
        <i class="fa-brands fa-github"></i>
      </a>
      <span className="skills">{props.project.technologies}</span>
    </div>
  );
}
export default ProjectCard;
