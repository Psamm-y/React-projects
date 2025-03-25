import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './hidden.css';
const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e) => {
    setBgColor('#1a1a1a');
    if (e.target.className === 'container') {
      setShowInput(false);
      setBgColor('white');
    }
  };
  return (
    <section
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      className="container"
    >
      {showInput ? (
        <input type="text" placeholder="Enter text..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
