import React from 'react';
import { projects } from './utils/projects';
import todoImage from '../assets/todo(2).png';
import './projects.css';
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className="projects-section">
      <div className="section-head">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projects.map(
          ({ image, title, language, description, link, category }) => (
            <div key={title} className="project-card">
              <div className="project-image">
                <img src={image} alt="project-image" />
                <div>
                  <button className="category">{category}</button>
                  <div className="project-title">{title} </div>
                </div>
              </div>
              <div className="project-content">
                <div className="description">{description}</div>
                <div className="tools">
                  {language.map((language) => (
                    <button key={language}>{language}</button>
                  ))}
                </div>
                <div>
                  <div>
                    <span>
                      <a href={link}>
                        <FaGithub />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FaLink />
                      </a>
                    </span>
                  </div>
                  <span className="deployed">
                    <a href="">
                      <FaExternalLinkAlt />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
