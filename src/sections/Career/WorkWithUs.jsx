import React from 'react';

export default function WorkWithUs({ jobPosts }) {
    return (
        <section className="career-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-box mb-4">
                            <h2 className="text-left">Come &amp; Work With Us</h2>
                            <p className="text-left">
                                <i>We help customers build world-class construction projects since 2001</i>
                                <br />
                                <br />
                                At Cosmic Construction, we are always looking for passionate and skilled individuals to join our dynamic team. Explore exciting career opportunities with us and be a part of building the future in a company that values innovation, integrity, and excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {jobPosts.map((job, index) => (
                        <div className="col-12" key={index}>
                            <div className="job-post mb-3 p-3 d-flex flex-column flex-md-row justify-content-between align-items-start">
                                <div>
                                    <a href={job.link} className="title">{job.title}</a>
                                    <div className="d-flex flex-wrap mt-2">
                                        {job.tags.map((tag, idx) => (
                                            <span key={idx} className="tag me-2 mb-2">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <a href={job.link} className="btn-custom mt-3 mt-md-0">Apply now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
