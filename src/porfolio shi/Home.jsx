import React from 'react';
import Matriculation from '../assets/Matriculation.jpg';
import './home.css';
const Home = () => {
  return (
    <div>
      <div className="image">
        <img src={Matriculation} alt="" />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Home;
