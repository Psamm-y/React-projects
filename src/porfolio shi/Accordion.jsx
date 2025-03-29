import React from 'react';
import { useState } from 'react';
import './about.css';
const Accordion = ({ title, essay }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="accordion-header">
        <div className="title">{title}</div>
        <button onClick={() => setExpand(!expand)}>{expand ? '-' : '+'}</button>
      </div>
      <div className="accordion-content">{expand ? essay : ''}</div>
    </>
  );
};

export default Accordion;
