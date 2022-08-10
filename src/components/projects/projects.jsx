import React from "react";
import "./projects.css";
import { PROJECTS } from "./projectData";
import Project from "./project";

function Projects() {
  return (
    <main className="projects">
      <div className="project-list">
        {PROJECTS.map((project) => (
          <Project key={project} name={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
