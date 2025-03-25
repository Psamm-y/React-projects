import React, { useId, useState } from 'react';
import './accordion.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const id = useId();
  return (
    <section key={id}>
      <div className="accordion-card">
        <div className="header" onClick={() => setIsActive(!isActive)}>
          {title}
          <p>{isActive ? '-' : '+'}</p>
        </div>
        <div className="content">{isActive ? <p>{content}</p> : ''}</div>
      </div>
    </section>
  );
};

export default Accordion;
