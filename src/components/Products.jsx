import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import productsData from './ProductsData'; // Import your product data
import './Products.css';

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        
        let filtered = productsData;
        
        // Filter products based on category
        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }
        
        // Further filter products based on search query
        if (searchQuery) {
            const queryWords = searchQuery.toLowerCase().split(' '); // Split the query into words

            filtered = filtered.filter(product =>
                queryWords.some(word => product.name.toLowerCase().includes(word))
            );
        }
        
        setFilteredProducts(filtered);
    }, [location.search, searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Determine if we are on the products page
    const isProductsPage = location.pathname === '/products';

    return (
        <section className={`products-page ${isProductsPage ? 'products-page-bg' : ''}`}>
            <h1>Our Products</h1>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search for products..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: Rs {product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </section>
    );
};

export default Products;
