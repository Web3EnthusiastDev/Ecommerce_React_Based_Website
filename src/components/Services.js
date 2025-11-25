import React, { useState } from 'react';
import ServiceCard from './ServiceCard'; // Import the reusable ServiceCard component
import Brand from './BrandProducts/Brand'; // Correct path to Brand component
import './Services.css'; // Ensure this CSS file exists and is correctly applied

const servicesData = [
  {
    title: 'Expert Consultation',
    description: 'Get personalized advice from our experts to choose the perfect cutlery set for your needs. We provide recommendations based on your cooking style and preferences.'
  },
  {
    title: 'Free Delivery',
    description: 'Enjoy free delivery on all orders over a certain amount. We ensure that your cutlery sets reach you in perfect condition and on time.'
  },
  {
    title: 'Easy Returns',
    description: 'If you\'re not satisfied with your purchase, our easy return policy allows you to return the product within a specified period for a full refund or exchange.'
  },
  {
    title: 'Customer Support',
    description: 'Our dedicated customer support team is here to assist you with any questions or issues you might have. Contact us via phone, email, or chat for prompt assistance.'
  }
];

const Services = () => {
  const [showBrandPopup, setShowBrandPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowBrandPopup(!showBrandPopup);
  };

  return (
    <section id="services" className="services-container">
      <div className="services-intro">
        <p>
          At our cutlery store, we offer a range of services to enhance your shopping experience.
          From detailed product information to prompt customer support, we've got you covered.
        </p>
        <button className="open-popup-btn" onClick={handlePopupToggle}>
          Learn About Our Brand
        </button>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {showBrandPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup-btn" onClick={handlePopupToggle}>X</button>
            <Brand />
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
