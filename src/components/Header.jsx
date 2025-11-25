import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import Products from './Products';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import OverviewProducts from './OverviewProducts';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const Header = () => {
  const location = useLocation();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  let component;

  switch (location.pathname) {
    case "/services":
      component = <Services />;
      break;
    case "/about":
      component = <AboutUs />;
      break;
    case "/contact":
      component = <ContactUs />;
      break;
    case "/overviewproducts":
      component = <OverviewProducts />;
      break;
    default:
      component = null; // Render nothing if no match
  }

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li className={`cart ${isActive('/cart')}`}>
                <Link to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.35-6H6.65M7 13L6.3 9h11.4m-10.7 4l-1.1 5.45a1 1 0 001 1.55h12a1 1 0 001-1.55L17 13M7 13H5m5 8a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </Link>
              </li>
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/overviewproducts" className={isActive('/overviewproducts')}>Overview Products</Link></li>
              <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
              <li><button onClick={() => setShowSignInModal(true)} className={isActive('/signin')}>Sign In</button></li>
              <li><button onClick={() => setShowSignUpModal(true)} className={isActive('/signup')}>Sign Up</button></li>
            </ul>
          </nav>
        </div>
      </header>
      {location.pathname !== "/" && component}
      {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} />}
      {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
    </>
  );
};

export default Header;
