import React from 'react';
import './FAQs.css';

const FAQs = () => {
    const faqs = [
        { question: "How do I place an order?", answer: "To place an order, browse our products and click on the 'Add to Cart' button. Proceed to checkout to finalize your order." },
        { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit/debit cards and PayPal." },
        { question: "Can I return or exchange my product?", answer: "Yes, you can return or exchange your product within 30 days of purchase. Please refer to our return policy for more details." },
        { question: "How can I contact customer service?", answer: "You can contact our customer service through the 'Contact Us' page or via email at support@example.com." },
    ];

    return (
        <section className="faqs-page">
            <h1>Frequently Asked Questions</h1>
            <div className="faqs-content">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
