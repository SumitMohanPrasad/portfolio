import React from 'react'
import Heading from '../../Components/Heading/Heading';
import './Contact.css';

const Contact = () => {
  return (
    <section id="Contact">
      <Heading index="04" heading="Contact Me" />
      <section className="contact_section">
        <div className="contact_heading_1"></div>
        <h1 className="contact_heading_2">Get in touch</h1>
        <p className="contact_desc">
         Email me with any question. I Would be happy to answer your question and a set up a meeting with you{" "}
        </p>
        <a href="mailto:suryanalam3011@gmail.com">
          <button className="contact_btn">Email </button>
        </a>
      </section>
    </section>
  );
};

export default Contact;
