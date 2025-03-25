import React, { useId } from 'react';
import { accordionData } from './Accordion project/utils/content';
import Accordion from './Accordion project/Accordion';

const App = () => {
  const id = useId();
  return (
    <>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default App;
