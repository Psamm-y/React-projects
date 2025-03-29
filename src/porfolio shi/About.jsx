import React, { useState } from 'react';
import './about.css';
import { desc } from './utils/about';
const About = () => {
  const [expand, setExpand] = useState(false);
  return (
    <section className="about" id="About">
      <div className="section-head">
        <h2>About Me</h2>
      </div>
      {desc.map((description) => (
        <div>
          <div className="title">
            <p> {description.title}</p>
            <button onClick={() => setExpand(!expand)}>
              {expand ? '-' : '+'}
            </button>
          </div>
          <div className="expand">
            {expand ? <p>{description.essay}</p> : ''}
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
