import React from 'react';
import Matriculation from '../assets/Matriculation.jpg';
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
        </div>
        <div className="image">
          <img src={Matriculation} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
