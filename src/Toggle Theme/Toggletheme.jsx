import React, { useState } from 'react';
import './toggle.css';
const Toggletheme = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');
  const [buttonStyle, setButtonStyle] = useState('white');

  const handleClick = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white');
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white');
  };

  return (
    <section
      className="page"
      style={{ backgroundColor, color: `${textColor}` }}
    >
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: `${textColor}`,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === '#1b1b1b' ? 'Dark theme' : 'Light theme'}
      </button>
      <section className="content">
        <h1>Welcome to a real World</h1>
      </section>
    </section>
  );
};

export default Toggletheme;
