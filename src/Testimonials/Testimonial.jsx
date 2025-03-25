import React, { useState } from 'react';

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
  return <div>Testimonial</div>;
};

export default Testimonial;
