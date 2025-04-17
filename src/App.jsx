import React, { useId } from 'react';
import Form from './Form validation/Form.jsx';
const App = () => {
  const id = useId();
  return (
    <>
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      <Form />
    </>
  );
};

export default App;
