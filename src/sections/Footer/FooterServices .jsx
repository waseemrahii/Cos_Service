import React from 'react';

export default function FooterServices({ services }) {
    return (
        <div className="footer-box text-center text-md-start">
            <h4>Our Services</h4>
            <ul className="list-unstyled mt-3">
                {services.map((service, index) => (
                    <li key={index} className="mb-2">- {service}</li>
                ))}
            </ul>
        </div>
    );
}
