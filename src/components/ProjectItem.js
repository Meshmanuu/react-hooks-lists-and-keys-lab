import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <h4>Technologies:</h4>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>
              <span>{technology}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectItem;
