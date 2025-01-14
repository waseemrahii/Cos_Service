import React from 'react';
import { Link } from 'react-router-dom';

export default function WhatWeDo({ servicesData }) {
    return (
        <section className="services-section service-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-box mb-5">
                            <h2 style={{ textAlign: 'left', display: 'block' }}>What We Do</h2>
                            <p style={{ textAlign: 'left', display: 'block' }}>
                                <i>We help customers build world-class construction projects since 2001</i>
                                <br />
                                <br />
                                At Cosmic Construction, we specialize in turning visions into reality. Whether it's large-scale commercial developments or bespoke residential projects, our experienced team is dedicated to delivering top-tier craftsmanship, innovative solutions, and unmatched quality. Our projects are a testament to our commitment to excellence, combining cutting-edge technology with sustainable practices to create spaces that are not only beautiful but also built to last. With over two decades of experience, Cosmic Construction continues to set the standard in the construction industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="service-box">
                                <div className="img-box">
                                    <img src={service.imgSrc} alt={service.title} />
                                </div>
                                <div className="text-box">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                                <Link to={`/servicedetails/${service.id}`} className="hover-item">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    <nav id="pagination">
                        <ul className="pagination wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.35s">
                            <li className="disabled page-item">
                                <a href="#" className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a href="#" className="page-link">1<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">2</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link" rel="next">»</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="service-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Looking for a 100% quality and affordable constructor for your project?</h3>
                        </div>
                        <div className="col-lg-4">
                            <a href="https://construm.bugfinder.net/contact"
                                className="btn-custom btn-dark">Contact Area</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
