import React, { useState } from 'react';
import './header.css';
import './styles.css';
import { FaSun, FaMoon } from 'react-icons/fa';
const Header = () => {
  const [active, setActive] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setTimeout(() => setActive(!active), 100);
  };
  return (
    <header className={active ? 'light ' : 'dark'}>
      <div className={active ? 'lightName ' : 'darkName'}>Samuel Ampadu.</div>
      <nav>
        <ul>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="toggle"
        onClick={toggleDarkMode}
        style={active ? { color: '#002647' } : { color: 'gold' }}
      >
        {active ? <FaMoon /> : <FaSun />}
      </div>
    </header>
  );
};

export default Header;
