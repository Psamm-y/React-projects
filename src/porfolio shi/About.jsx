import React, { useId, useState } from 'react';
import './about.css';
import Accordion from './Accordion';
import desc from './utils/about';
import image from '../assets/ambulare-picture.jpg';
const About = () => {
  const id = useId();
  return (
    <section className="about-section" id="about">
      <div className="section-head">
        <h2>About Me</h2>
      </div>
      <div className="main-about">
        <img src={image} alt="" />
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
