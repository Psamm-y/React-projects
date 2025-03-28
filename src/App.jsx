import React, { useId } from 'react';

import Header from './porfolio shi/Header';
import Home from './porfolio shi/Home';

const App = () => {
  const id = useId();
  return (
    <>
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      <Header />
      <Home />
    </>
  );
};

export default App;
