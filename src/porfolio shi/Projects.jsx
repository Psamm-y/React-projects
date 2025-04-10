import React from 'react';
import { projects } from './utils/projects';

const Projects = () => {
  return (
    <div>
      <div className="section-head">
        <h2>Projects</h2>
      </div>
      {projects.map(() => (
        <div>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
