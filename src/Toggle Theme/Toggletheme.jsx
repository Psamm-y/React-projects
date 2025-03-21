import React, { useState } from 'react';

const Toggletheme = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textcolor, setTextColor] = useState('#1b1b1b');
  const [buttonStyle, setbuttonStyle] = useState('white');

  const handleClick = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white');
    setTextColor(textcolor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setbuttonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white');
  };

  return (
    <section style={{ backgroundColor, color: `${textcolor}` }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: { textcolor },
          border: `2px solid ${textcolor}`,
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
