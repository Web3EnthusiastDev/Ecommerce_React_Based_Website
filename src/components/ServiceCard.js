// src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // Ensure this CSS file exists for styling

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
