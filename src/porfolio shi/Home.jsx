import React from 'react';
import Matriculation from '../assets/Matriculation.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import './home.css';
import './styles.css';
const Home = () => {
  return (
    <main>
      <section className="homepage">
        <div className="content">
          <div className="greeting">
            Hi, I'm <span className="name">Psammy</span>
          </div>
          <div className="role">Full Stack Developer</div>
          <div className="refer">
            <button className="more-btn">More about me</button>
            <div className="social-links">
              <span className="link">
                <FaLinkedin />
              </span>
              <span className="link">
                <FaGithub />
              </span>
              <span className="link">
                <FaXTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Matriculation} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
