import React from 'react';

export default function WhoWeAre({ title, description, imageSrc }) {
    return (
        <section className="about-section about-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="img-box">
                            <img src={imageSrc} alt={title} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-box">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
