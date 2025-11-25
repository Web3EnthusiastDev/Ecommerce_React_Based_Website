import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products'; 
import Services from './components/Services'; 
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OrderTracking from './components/BrandProducts/OrderTracking'; 
import HomePage from './components/HomePage'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} 
        />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/track-order" element={<OrderTracking />} />
      </Routes>
   
    </div>
  );
}

export default App;
