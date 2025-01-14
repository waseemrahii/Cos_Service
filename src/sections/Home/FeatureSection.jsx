import React from 'react';

export default function FeatureSection({ features }) {
    return (
        <section className="feature-section">
            <div className="container">
                <div className="row g-3 g-lg-0 mt-0">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="feature-box" data-aos="fade-up" data-aos-duration={800} data-aos-anchor-placement="center-bottom">
                                <img src={feature.image} alt={feature.title} style={{ maxWidth: '100px', marginBottom: '20px' }} />
                                <h4>{feature.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
