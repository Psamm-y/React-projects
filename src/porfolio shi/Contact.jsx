import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import {
  FaLocationArrow,
  FaMailBulk,
  FaMap,
  FaPhone,
  FaSpinner,
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaLocationDot, FaMapLocation } from 'react-icons/fa6';
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    number: useRef(null),
    message: useRef(null),
    company: useRef(null),
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); //if submitted, start loading
    emailjs
      .sendForm(
        'service_d58jhhb',
        'template_6e6hylk',
        e.target,
        'gfNcj7fEBEwp7Fa73'
      )
      .then(
        () => {
          Object.values(inputRefs).forEach((ref) => {
            if (ref.current) ref.current.value = '';
          });
          alert('Email has been sent successfully');
        },
        (error) => alert('Failed to send message: ' + error.text)
      )
      .finally(() => setLoading(false));
  };
  return (
    <div id="contact" className="contact-sec" style={{ color: 'white' }}>
      <div className="section-head">
        <h2>Get In Touch</h2>
      </div>
      <div className="get-in-touch-sec">
        <div className="left">
          <p className="msg">Let's Build Something Amazing</p>
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
          <p className="msg">Send me a Message</p>
          {/*form here*/}
          <form onSubmit={sendEmail}>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name*"
              ref={inputRefs.name}
              required
            />
            <input
              type="text"
              ref={inputRefs.company}
              name="companyName"
              placeholder="Company Name"
            />
            <input
              type="email"
              name="fromEmail"
              placeholder="Email address*"
              ref={inputRefs.email}
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number (Optional)"
              ref={inputRefs.number}
              maxLength={12}
            />
            <textarea
              name="message"
              type="text"
              placeholder="Message*"
              ref={inputRefs.message}
              required
            />
            <button disabled={loading} type="submit">
              {loading ? (
                <>
                  <FaSpinner />
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
