import React, { useId, useState } from 'react';
import './about.css';
import Accordion from './Accordion';
import desc from './utils/about';
const About = ({ title, essay }) => {
  const id = useId();
  return (
    <section className="about-section" id="about">
      <div className="section-head">
        <h2>About Me</h2>
      </div>
      <div className="about">
        {desc.map(({ title, essay }) => (
          <div key={Math.random()} className="whole-accordion">
            <Accordion key={Math.random()} title={title} essay={essay} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
