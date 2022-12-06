import React from "react";

function ProjectCard(props) {
  return (
    <div className="border border-danger">
      <a className="nav-link active" href={props.project.repo}>
        {props.project.title}
      </a>{" "}
      <a className="nav-link active" href={props.project.link}>
        <i class="fa-brands fa-github"></i>
      </a>
      {props.project.technologies}
    </div>
  );
}
export default ProjectCard;
