import React from 'react';
import './Brand.css';

const Brand = () => {
    return (
        <section className="brand-page">
            <h1>Our Brand Story</h1>
            <div className="brand-content">
                <div className="brand-info">
                    <h2>Our Mission</h2>
                    <p>We are dedicated to providing high-quality cutlery products that blend style with functionality. Our mission is to enhance your dining experience with elegant and durable tools.</p>
                </div>
                <div className="brand-info">
                    <h2>Our History</h2>
                    <p>Founded in 2000, our company has a long history of excellence in cutlery manufacturing. With years of experience, we continue to innovate and bring the best products to our customers.</p>
                </div>
                <div className="brand-info">
                    <h2>Why Choose Us?</h2>
                    <p>Our cutlery is crafted from the finest materials and designed with care. We offer a range of products that cater to different tastes and needs, ensuring that every meal is a special occasion.</p>
                </div>
            </div>
        </section>
    );
};

export default Brand;
