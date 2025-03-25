import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e) => {
    setBgColor(showInput ? 'white' : 'red');
    setShowInput(!showInput);
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
