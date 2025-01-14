import React from 'react';

export default function ExperienceSection({ experienceDetails, backgroundImage }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .experience-section {
                    background: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            ` }} />
            <section className="experience-section">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            {experienceDetails.map((detail, index) => (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="experience-box">
                                        <h4>{detail.title}</h4>
                                        <h1><span className="counter">{detail.value}</span><span className="color">+</span></h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
