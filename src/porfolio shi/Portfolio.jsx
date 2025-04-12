import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import { GoMoveToTop } from 'react-icons/go';
import './styles.css';
import './hamburger.css';
import Skills from './Skills';
import Projects from './Projects';
const Portfolio = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    document.title = 'Psammy Porfolio';
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {showButton && (
        <button className="move-to-top" onClick={() => handleClick}>
          <a href="#">
            <GoMoveToTop />
          </a>
        </button>
      )}
      <Projects />
    </div>
  );
};

export default Portfolio;
