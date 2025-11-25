import React from 'react';
import { Link } from 'react-router-dom';
import './OverviewProducts.css';

const OverviewProducts = () => {
    return (
        <section className="portal-sections">
            <div className="section wooden">
                <h2>Wooden Cutlery</h2>
                <p>Explore our collection of premium wooden cutlery.</p>
                <Link to="/products?category=wooden" className="cta-button">View Wooden Cutlery</Link>
            </div>

            <div className="section steel">
                <h2>Steel Cutlery</h2>
                <p>Browse through our durable and stylish steel cutlery.</p>
                <Link to="/products?category=steel" className="cta-button">View Steel Cutlery</Link>
            </div>

            <div className="section ceramic">
                <h2>Ceramic Cutlery</h2>
                <p>Check out our elegant ceramic cutlery sets.</p>
                <Link to="/products?category=ceramic" className="cta-button">View Ceramic Cutlery</Link>
            </div>

            <div className="section plastic">
                <h2>Plastic Cutlery</h2>
                <p>Discover our range of affordable plastic cutlery.</p>
                <Link to="/products?category=plastic" className="cta-button">View Plastic Cutlery</Link>
            </div>
        </section>
    );
};

export default OverviewProducts;
