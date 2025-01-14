import React from 'react';

export default function CompanyAchievement({ achievements }) {
    return (
        <section className="company-achievement">
            <div className="container">
                <div className="row">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="col-12 gy-5 noBorder">
                            <div className="achievement-box d-flex">
                                <div className="date">
                                    <h3>{achievement.year}</h3>
                                </div>
                                <div className="info">
                                    <h4>{achievement.title}</h4>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
