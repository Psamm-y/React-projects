import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import { GoMoveToTop } from 'react-icons/go';
import './styles.css';
import './hamburger.css';
import Skills from './Skills';
const Portfolio = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    document.title = 'Psammy Porfolio';
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener(scroll, handleScroll);
    };
  }, []);
  const [active, setActive] = useState(false);
  return (
    <div className="portfolio">
      <Header active={active} setActive={setActive} />
      <Home />
      <About />
      <Skills />
      <div className="move-to-top">
        <a href="#">
          <GoMoveToTop />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
