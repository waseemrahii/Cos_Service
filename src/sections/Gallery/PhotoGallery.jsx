import React from 'react';

export default function PhotoGallery({ galleryItems }) {
    return (
        <section className="gallery-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-box mb-5">
                            <h2 style={{ textAlign: 'left', display: 'block' }}>Our Photo Gallery</h2>
                            <p style={{ textAlign: 'left', display: 'block' }}>
                                <i>We help customers build world-class construction projects since 2001</i>
                                <br />
                                <br />
                                At Cosmic Construction, we take pride in delivering exceptional results that stand the test of time. Whether it's a towering commercial structure or a cozy residential space, our commitment to excellence and innovation shines through in every project. Explore our gallery to witness the craftsmanship and dedication that have made us a trusted name in the construction industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="tab3" className="portfolio-gallery active">
                            <div id="container" className="cols">
                                {galleryItems.map((item, index) => (
                                    <div className="img-box" key={index}>
                                        <img className="img-fluid thumb-img-page" src={item.src} alt={item.alt} />
                                        <div className="hover-item">
                                            <a href={item.src} data-fancybox="gallery">
                                                <i className="fal fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mt-3">
                                <nav id="pagination"></nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
