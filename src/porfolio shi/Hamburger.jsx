import React, { useState } from 'react';
import './hamburger.css';
import Menu from './Menu';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hamburger-container">
      <div
        onClick={() => setOpen(!open)}
        className={open ? 'hamburger-menu-close' : 'hamburger-menu'}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      {open && (
        <div className="menu-overlay">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Hamburger;
