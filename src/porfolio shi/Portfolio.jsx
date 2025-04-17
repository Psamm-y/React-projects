import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import { GoMoveToTop } from 'react-icons/go';
import './styles.css';
import './hamburger.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
const Portfolio = () => {
  // const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef('');
  useEffect(() => {
    document.title = 'Psammy Porfolio';
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // setShowButton(true);
        buttonRef.current?.classList.add('show');
      } else {
        // setShowButton(false);
        buttonRef.current?.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [active, setActive] = useState(false);
  return (
    <div className="portfolio">
      <Header active={active} setActive={setActive} />
      <Home />
      <About />
      <Skills />

      <button
        ref={buttonRef}
        className="move-to-top"
        onClick={() => handleClick()}
      >
        <span>
          <GoMoveToTop className="icon" />
        </span>
      </button>

      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
