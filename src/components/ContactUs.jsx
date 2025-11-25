// src/components/ContactUs.js
import React, { useState } from 'react'; // Import necessary hooks
import './ContactUs.css'; // Ensure to create this CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';// for icons
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for contacting us!');
  };

  return (
    <section id="contact" className="contact-us-container">
      <div className="contact-us-intro">
        <p>
          We would love to hear from you! If you have any questions, comments, or feedback, please feel free to reach out to us using the contact form below or through the other methods provided.
        </p>
      </div>

      <div className="contact-us-info">
        <h2>Contact Information</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Address</h3>
            <p>1234 Cutlery Lane, Kitchen City, CA 56789</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="info-card">
            <h3>Email</h3>
            <p>support@cutleryshop.com</p>
          </div>
        </div>
      </div>

      <div className="contact-us-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>

      <div className="contact-us-social">
        <h2>Follow Us</h2>
       
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
