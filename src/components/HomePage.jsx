import React from 'react';
import { Link } from 'react-router-dom';
import summerImage from '../assets/summersale.jpg'; // Adjust path as needed
import BuyOneGetOneFree from '../assets/BuyOneGetOneFree.avif'; // Adjust path as needed

function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>
        
          Welcome to Our Cutlery Home
        
        </h1>
        <p>
          Elevate your culinary experience with our exclusive cutlery collection. Whether you’re a gourmet chef or simply love cooking at home, our premium cutlery sets are designed to meet all your kitchen needs. Our meticulously crafted knives and utensils combine functionality with elegance, ensuring precision and comfort with every use.
        </p>
        <button className="cta-button">Shop Now</button>
        <Link to="/track-order">
            <button className="track-order-button">Track Order</button>
          </Link>
      </section>
      
      <section className="promotions">
        <h2>Special Promotions</h2>
        <div className="promo-grid">
          <div className="promo-card">
            <img src={summerImage} alt="Summer Sale" />
            <h3>Summer Sale</h3>
            <p>Up to 30% off on selected items!</p>
            <button className="cta-button">Shop Now</button>
          </div>
          <div className="promo-card">
            <img src={BuyOneGetOneFree} alt="Buy One Get One Free" />
            <p>Buy any set of cutlery and get another set free.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>
      
      <section className="blog">
        <h2>From Our Blog</h2>
        <div className="blog-posts">
          <article className="blog-post">
            <h3>How to Choose the Right Cutlery for Your Kitchen</h3>
            <p>Learn what to look for when selecting cutlery that suits your needs and style.</p>
            <a href="#" className="read-more">Read More</a>
          </article>
          <article className="blog-post">
            <h3>Tips for Maintaining Your Cutlery</h3>
            <p>Discover tips and tricks to keep your cutlery in top condition.</p>
            <a href="#" className="read-more">Read More</a>
          </article>
        </div>
      </section>
      
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and exclusive offers directly to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="cta-button">Subscribe</button>
        </form>
      </section>
      
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review-grid">
          <div className="review-card">
            <p>"Great quality cutlery! Highly recommend."</p>
            <p>Hasnain Khan</p>
          </div>
          <div className="review-card">
            <p>"Fantastic service and fast delivery. Will buy again."</p>
            <p>Hamza Khan</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
