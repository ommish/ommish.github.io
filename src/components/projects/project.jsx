import React from "react";
import { IMAGES_BY_PROJECT, DESCRIPTIONS_BY_PROJECT } from "./projectData";

function Project({ name }) {
  const project = DESCRIPTIONS_BY_PROJECT[name];
  return (
    <React.Fragment>
      <div className="project-details">
        <h2 className="name">{name}</h2>
        <div className="links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i> Visit
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i> Code
            </a>
          )}
        </div>
        <div className="basics">{project.basics}</div>
        {project.features && <div className="features">{project.features}</div>}
        <div className="tools">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </div>
      </div>
      <div className="project-preview">
        <img src={IMAGES_BY_PROJECT[name]} alt={name} />
      </div>
    </React.Fragment>
  );
}

export default Project;
