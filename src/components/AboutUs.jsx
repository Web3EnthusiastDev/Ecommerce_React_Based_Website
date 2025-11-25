import React, { useState, useEffect } from 'react';
import Image1 from '../assets/man1.jpg'; // Adjust this relative path as needed
import Image2 from '../assets/man2.jpg'; // Adjust this relative path as needed
import './AboutUs.css';
import FAQs from './BrandProducts/FAQs'; // Correct relative path to FAQs component

const AboutUs = () => {
  const [isContentRendered, setIsContentRendered] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const hasRendered = localStorage.getItem('aboutUsContentRendered');

    if (!hasRendered) {
      localStorage.setItem('aboutUsContentRendered', 'true');
      setIsContentRendered(true);
    } else {
      setIsContentRendered(true);
    }
  }, []);

  const handleFAQClick = () => {
    setShowFAQ(true);
  };

  const handleCloseFAQ = () => {
    setShowFAQ(false);
  };

  if (!isContentRendered) {
    return null; // Return null until useEffect sets the content as rendered
  }

  return (
    <div className="about-us-container">
      <div className="about-us-intro">
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to providing top-notch services and products to our customers.</p>
      </div>

      <div className="about-us-mission">
        <h2>Our Mission</h2>
        <p>To deliver exceptional quality and value in every product and service we offer.</p>
      </div>

      <div className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={Image1} alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={Image2} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        </div>
      </div>

      <div className="about-us-values">
        <h2>Our Values</h2>
        <div className="values-cards">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We uphold the highest standards of integrity in all of our actions.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We strive to innovate and improve in all that we do.</p>
          </div>
        </div>
        <div className="about-us-history">
        <h2>Our History</h2>
        <p>We have been serving our community for over a decade with dedication and passion.</p>
      </div>
      </div>

   

      <footer className="about-us-footer">
        <p>
          If you have any questions, feel free to{' '}
          <button
            className="open-faqs-btn"
            onClick={handleFAQClick}
            aria-label="Open FAQs"
          >
            check out our FAQs
          </button>
        </p>
      </footer>

      {showFAQ && (
        <div className="faq-overlay" onClick={handleCloseFAQ}>
          <div className="faq-content" onClick={(e) => e.stopPropagation()}>
            <button className="faq-close" onClick={handleCloseFAQ}>×</button>
            <FAQs />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
