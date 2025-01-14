import React from 'react';

export default function ProjectsCompleted({ sidebarLinks, projectImages }) {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header-text">
                            <h5>Portfolio</h5>
                            <h2>Our Projects That We Have Completed So Far</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <ul className="sidebar">
                            {sidebarLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>
                                        <i className="far fa-chevron-right" /> {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-10">
                        <div id="tab3" className="portfolio-gallery active">
                            <div id="container" className="cols">
                                {projectImages.map((image, index) => (
                                    <div className="img-box" key={index}>
                                        <img className="img-fluid thumb-img" src={image.src} alt={image.alt} />
                                        <div className="hover-item">
                                            <a href={image.src} alt={image.alt} data-fancybox="gallery">
                                                <i className="fal fa-search" />
                                            </a>
                                            <a href={image.link}>
                                                <i className="fal fa-link" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
