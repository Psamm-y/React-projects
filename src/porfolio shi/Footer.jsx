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
            Samuel Ampadu.
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
        <div className="contact">
          <h3>Contact info</h3>
          <div>
            <div className="contact-info">
              <span style={{ background: 'none' }}>
                <FaPhone style={{ color: 'white' }} />
              </span>
              <div>
                <p>(233)558 317 782</p>
              </div>
            </div>
            <div className="contact-info">
              <span style={{ background: 'none' }}>
                <MdMail style={{ color: 'white' }} />
              </span>
              <div>
                <p>ampadupsamuel1@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <span>
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
