import React, { useId, useState } from 'react';
import './about.css';
import Accordion from './Accordion';
import desc from './utils/about';
import image from '../assets/Psammy.jpg';
import { FaCalendar, FaGraduationCap, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const About = () => {
  const id = useId();
  return (
    <section className="about-section" id="about">
      <div className="section-head">
        <h2>About Me</h2>
      </div>
      <div className="main-about">
        <div className="about-image">
          <img src={image} alt="image of Psammy" />
        </div>
        <div className="info-section">
          <div className="header">
            <h3>Samuel Amoako Ampadu</h3>
            <p>Full stack developer</p>
          </div>
          <div className="more-info">
            <p>
              <span>
                <FaCalendar className="icon" /> DOB:
              </span>
              11th August
            </p>
            <p>
              <span>
                <FaLocationDot className="icon" /> Location:
              </span>
              Ofankor Barrier, Accra: Ghana
            </p>
            <p>
              <span>
                <FaPhone className="icon" /> Phone:
              </span>
              +233 537 522 104
            </p>
            <p>
              <span>
                <MdEmail className="icon" /> Email:
              </span>
              ampadupsamuel1@gmail.com
            </p>
            <p>
              <span>
                <FaGraduationCap className="icon" /> School:
              </span>
              University of Ghana
            </p>
          </div>
        </div>
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
