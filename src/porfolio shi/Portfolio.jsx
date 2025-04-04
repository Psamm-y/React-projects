import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';

import './hamburger.css';
import Skills from './Skills';
const Portfolio = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Header active={active} setActive={setActive} />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default Portfolio;
