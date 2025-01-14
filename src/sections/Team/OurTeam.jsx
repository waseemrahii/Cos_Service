import React from 'react';

export default function OurTeam({ teamMembers }) {
    return (
        <section className="team-section team-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-box mb-5">
                            <h2>Meet our expert executive team</h2>
                            <p>
                                <i>We help customers build world-class construction projects since 2001.</i>
                                <br /><br />
                                Meet our expert executive team at Cosmic Construction, where leadership, experience, and innovation converge. Our dedicated team of industry professionals is committed to driving success and delivering excellence in every project we undertake.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="team-box">
                                <div className="img-box">
                                    <img className="img-fluid" src={member.image} alt={member.name} />
                                    <div className="social-links">
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <h4>{member.name}</h4>
                                    <span>{member.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
