import React, { useState } from 'react';
import './testimonial.css';
const Testimonial = () => {
  const [currentState, setCurrentState] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: 'Jane Doe',
    },
    {
      quote: 'I highly recommend this product to everyone!',
      author: 'John Smith',
    },
    {
      quote: 'This product has completely changed my life!',
      author: 'Bob Johnson',
    },
  ];
  const handlePrevClick = () => {
    setCurrentState(
      (currentState + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentState((currentState + 1) % testimonials.length);
  };
  return (
    <div className="testimonial">
      <div className="testimonial-quote">
        "{testimonials[currentState].quote}"
      </div>

      <div className="testimonial-author">
        -{testimonials[currentState].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
