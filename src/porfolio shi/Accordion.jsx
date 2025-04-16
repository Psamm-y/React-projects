import React from 'react';
import { useState } from 'react';
import './about.css';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
const Accordion = ({ title, essay }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="accordion-header" onClick={() => setExpand(!expand)}>
        <div className="title">{title}</div>
        <span>{expand ? <FaChevronCircleUp /> : <FaChevronCircleDown />}</span>
      </div>
      <div className="accordion-content">{expand && essay}</div>
    </>
  );
};

export default Accordion;
