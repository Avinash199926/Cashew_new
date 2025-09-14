import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Information</h2>

        <div className="contact-item">
          <i className="fas fa-phone-alt contact-icon"></i>
          <div>
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone contact-icon"></i>
          <div>
            <h4>Landline</h4>
            <p>044 - 2456 7890</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope contact-icon"></i>
          <div>
            <h4>Email</h4>
            <p>support@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <div>
            <h4>Address</h4>
            <p>123, Tech Park Street, Bangalore, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
