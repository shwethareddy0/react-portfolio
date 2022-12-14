import React from "react";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  //array to hold all the projects' details
  const projects = [
    {
      title: "HOMR",
      link: "https://shwethareddy0.github.io/homr/",
      repo: "https://github.com/shwethareddy0/homr",
      technologies: "JavaScript, jQuery, Chart.js, BULMA, Server Side APIs",
    },
    {
      title: "InvestorRest",
      link: "https://investorrest.herokuapp.com/",
      repo: "https://github.com/shwethareddy0/investorrest",
      technologies:
        "HTML,Bootstrap, SCSS, React,Node.js,Express.js,Mongoose,Axios",
    },
    {
      title: "Tech Blog",
      link: "https://sr-tech-blog.herokuapp.com/",
      repo: "https://github.com/shwethareddy0/tech-blog",
      technologies: "Node.js, Express.js, MySQL, Bootstrap",
    },
    {
      title: "Note Taker",
      link: "https://sp-note-taker-app.herokuapp.com/",
      repo: "https://github.com/shwethareddy0/note-taker",
      technologies: "Node.js, Express.js, MySQL, Bootstrap",
    },
    {
      title: "Work Day Scheduler",
      link: "https://shwethareddy0.github.io/work-day-scheduler/",
      repo: "https://github.com/shwethareddy0/work-day-scheduler",
      technologies: "JavaScrpt, jQuery, Bootstrap, Moment.js",
    },
    {
      title: "Code Quiz",
      link: "https://shwethareddy0.github.io/code-quiz/",
      repo: "https://github.com/shwethareddy0/code-quiz",
      technologies: "HTML5, CSS, JavaScript",
    },
  ];
  return (
    <div className="portfolio">
      {/*iterate over the array and render project cards*/}
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}
export default Portfolio;
