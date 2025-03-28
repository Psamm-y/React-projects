import React from 'react';
import Matriculation from '../assets/Matriculation.jpg';
import './home.css';
import './styles.css';
const Home = () => {
  return (
    <section className="homepage">
      <div className="image">
        <img src={Matriculation} alt="" />
      </div>
      <div className="content">
        <div className="greeting">
          Hi, I'm <span>Psammy</span>{' '}
        </div>
      </div>
    </section>
  );
};

export default Home;
