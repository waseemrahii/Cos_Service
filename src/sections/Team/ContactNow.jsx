import React from 'react';

export default function ContactNow({ message }) {
    return (
        <div className="service-contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h3>{message}</h3>
                    </div>
                    <div className="col-lg-4">
                        <a href="#" className="btn-custom btn-dark">Contact Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
