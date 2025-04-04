import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';

import './hamburger.css';
const Portfolio = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Header active={active} setActive={setActive} />
      <Home />
      <About />
    </div>
  );
};

export default Portfolio;
