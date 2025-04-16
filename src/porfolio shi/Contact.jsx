import React from 'react';
import './contact.css';
import { FaLocationArrow, FaMailBulk, FaMap, FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaLocationDot, FaMapLocation } from 'react-icons/fa6';
const Contact = () => {
  return (
    <div className="contact-sec" style={{ color: 'white' }}>
      <div className="section-head">
        <h2>Get In Touch</h2>
      </div>
      <div className="get-in-touch-sec">
        <div className="left">
          <p>Let's Build Something Amazing</p>
          <div className="contact-info">
            <span>
              <FaPhone />
            </span>
            <div>
              <p>Call Me</p>
              <p>(233) 558 317 782</p>
            </div>
          </div>
          <div className="contact-info">
            <span>
              <MdMail />
            </span>
            <div>
              <p>Email Me</p>
              <p>ampadupsamuel1@gmail.com</p>
            </div>
          </div>
          <div className="contact-info">
            <span>
              <FaLocationDot />
            </span>
            <div>
              <p>Find Me</p>
              <p>Ofankor, Accra</p>
            </div>
          </div>
        </div>
        <div className="right">
          <p>Send me a Message</p>
          <form action="">
            <input type="text" placeholder="Full Name*" required />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Email address*" required />
            <input type="text" placeholder="Mobile Number (Optional)" />
            <textarea type="text" placeholder="Message*" required />
            <button>Submit</button>{' '}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
