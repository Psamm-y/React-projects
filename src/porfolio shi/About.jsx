import React, { useId, useState } from 'react';
import './about.css';
import Accordion from './Accordion';
import desc from './utils/about';
const About = ({ title, essay }) => {
  const id = useId();
  return (
    <section className="about" id="About">
      <div className="section-head">
        <h2>About Me</h2>
      </div>
      <div className="">
        {desc.map(({ title, essay }) => (
          <Accordion key={Math.random()} title={title} essay={essay} />
        ))}
      </div>
    </section>
  );
};

export default About;
