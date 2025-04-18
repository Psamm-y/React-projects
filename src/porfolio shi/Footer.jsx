import React from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import './footer.css';
import { MdMail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="socials">
          <div>
            <h1>Samuel Ampadu.</h1>
            <p>
              Showcase of my work,skills and projects. Crafting digital
              experiences that matter.
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/ampadu-samuel"
              target="_blank"
              className="link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/psamm-y"
              target="_blank"
              className="link"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/ampadu_psamuel"
              target="_blank"
              className="link"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="sitemap">
          <h3>Sitemap</h3>
          <p>
            <a href="#home">- Home</a>
          </p>
          <p>
            <a href="#about">- My About</a>
          </p>
          <p>
            <a href="#skills">- Skills section</a>
          </p>
          <p>
            <a href="#projects">- Featured Projects</a>
          </p>
          <p>
            <a href="#contact">- Contact section</a>
          </p>
        </div>
        <div className="contact">
          <h3>Contact info</h3>
          <div>
            <div className="contact-info">
              <span style={{ background: 'none' }}>
                <FaPhone />
              </span>
              <div>
                <p>(233)558 317 782</p>
              </div>
            </div>
            <div className="contact-info">
              <span style={{ background: 'none' }}>
                <MdMail />
              </span>
              <div>
                <p>ampadupsamuel1@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <span style={{ background: 'none' }}>
                <FaLocationDot />
              </span>
              <div>
                <p>Ofankor, Accra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
