import React, { useState } from 'react';
import './OrderTracking.css';

 
const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTrackOrder = () => {
        setIsLoading(true);
        setOrderStatus(null);
        setError('');

        // Simple validation for empty order ID
        if (!orderId.trim()) {
            setError('Please enter a valid Order ID.');
            setIsLoading(false);
            return;
        }

        // Simulate a delay to represent tracking process
        setTimeout(() => {
            setOrderStatus(`Order ${orderId} is currently being processed.`);
            setIsLoading(false);
        }, 3000); // Simulating a 3-second delay
    };

    return (
        <section className="order-tracking-page">
            <h1>Track Your Order</h1>
            <div className="tracking-form">
                <input
                    type="text"
                    placeholder="Enter your order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <button onClick={handleTrackOrder}>Track Order</button>
            </div>

            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            {/* Show loading animation while fetching status */}
            {isLoading && (
                <div className="order-tracking-symbol">
                    <i className="dot-1">•</i>
                    <i className="dot-2">•</i>
                    <i className="dot-3">•</i>
                </div>
            )}

            {/* Display the order status after loading */}
            {orderStatus && <p className="order-status">{orderStatus}</p>}
        </section>
    );
};

export default OrderTracking;
