import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ni3x3q', 'template_vs562wi', formRef.current, '3Ca-PY8yakqxS2qt0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className="form-container">
      <h2>Contact Form</h2>
      <form className="form" ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your message here...."
        >
        </textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact;
