import React from 'react';
import '../../App.css';

export default function Knowledge({ knowledgeItems }) {
    return (
        <section className="knowledgebase-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-box mb-5">
                            <h2>Construction Knowledgebase</h2>
                            <p>
                                <i>We help customers build world-class construction projects since 2001</i>
                                <br />
                                <br />
                                The Cosmic Construction Knowledgebase is your go-to resource for expert insights, tips, and best practices in the construction industry. Whether you're a seasoned professional or just starting out, our knowledgebase offers valuable information to help you stay informed and succeed in your projects.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {knowledgeItems.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="knowledge-box">
                                <div className="header">
                                    <div className="icon">
                                        <i className={item.icon} />
                                    </div>
                                    <div className="text">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <ul>
                                    {item.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.href}>
                                                <i className="fal fa-file" />
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="read-more">
                                    View all <i className="far fa-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
