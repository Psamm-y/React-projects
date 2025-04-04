import React from 'react';
import { FaTools, FaLightbulb, FaHtml5 } from 'react-icons/fa';
import { technicalSkills, softSkills } from './utils/skills';
import './skills.css';
const Skills = () => {
  return (
    <div className="skills-section">
      <div className="section-head">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        <div className="technical">
          <div className="technical-header">
            <FaTools className="icon" />
            <h3>Technical Skills</h3>
          </div>
          <div className="skills-list">
            {technicalSkills.map(({ skill, skillIcon, skillPercentage }) => (
              <div className="skill">
                <div>
                  <span>{skill}</span>
                </div>
                <div className="whole-bar">
                  <div
                    className="percent"
                    style={{ width: skillPercentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="soft">
          <div className="soft-header">
            <FaLightbulb className="icon" />
            <h3>Soft skills</h3>
          </div>
          <div className="skills-list">
            {softSkills.map((skill) => (
              <div>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
