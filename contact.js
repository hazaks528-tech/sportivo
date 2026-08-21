import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <span>SPORTIVO</span>
        <h1>Contact Us</h1>
        <p>
          We're here to help. Get in touch with SPORTIVO anytime.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>sportivo@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Phone</h3>
          <p>+92 300 44465478</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Location</h3>
          <p>Pakistan</p>
        </div>

      </div>

      <div className="contact-message">
        <h2>Let's Talk Sports</h2>

        <p >
          Have a question about our products or your order?
          Feel free to contact us. Our team will be happy to help.
        </p>

        <button
          onClick={() =>
            (window.location.href = "mailto:sportivo@gmail.com")
          }
        >
          SEND US AN EMAIL
        </button>
      </div>

    </div>
  );
}

export default Contact;