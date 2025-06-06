import React, { useEffect } from 'react';
import { buttonStyles, languageStyles, projects } from './utils/projects';
import './projects.css';
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';
const Projects = () => {
  //animation executes when in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
        else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  const copy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log('Copied to clipboard'))
      .catch((err) => console.log('Failed to copy:', err));
    alert('Github url copied');
  };
  return (
    <div id="projects" className="projects-section">
      <div className="section-head">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projects.map(
          ({
            image,
            title,
            language,
            description,
            link,
            category,
            githubRepos,
            delay,
          }) => (
            <div
              style={{ transitionDelay: delay }}
              key={title}
              className="project-card hidden"
            >
              <div className="project-image">
                <img src={image} alt="project-image" />
                <div className="overlay">
                  <button style={buttonStyles[category]} className="category">
                    {category}
                  </button>
                  <div className="project-title">{title} </div>
                </div>
              </div>
              <div className="project-content">
                <div className="description">{description}</div>
                <div className="tools">
                  {language.map((language) => (
                    <button style={languageStyles[language]} key={language}>
                      {language}
                    </button>
                  ))}
                </div>
                <div>
                  <div>
                    <span title="Redirect to github repos">
                      <a target="_blank" href={githubRepos}>
                        <FaGithub />
                      </a>
                    </span>
                    <span
                      style={{ cursor: 'copy' }}
                      onClick={() => copy(githubRepos)}
                      title="Copy github url"
                    >
                      <FaLink />
                    </span>
                  </div>
                  {link && (
                    <span
                      title="Redirect to deployed site"
                      className="deployed"
                    >
                      <a href={link} target="_blank">
                        <FaExternalLinkAlt />
                      </a>
                    </span>
                  )}
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
