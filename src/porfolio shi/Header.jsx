import React, { useState } from 'react';
import './header.css';
import './styles.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Hamburger from './Hamburger';
const Header = ({ active, setActive }) => {
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
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              style={active ? { color: 'black' } : { color: 'white' }}
              href="#contact"
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
      <div>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
