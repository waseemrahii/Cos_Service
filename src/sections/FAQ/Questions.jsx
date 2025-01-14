import React from 'react';

export default function Questions({ faqData }) {
    return (
        <section className="faq-section" style={{ backgroundColor: '#F4F4F4' }}>
            <div className="container py-8">
                <div className="row">
                    <div className="col">
                        <div className="text-box mb-5">
                            <h2 style={{ textAlign: 'left', display: 'block' }}>Frequently Asked Questions</h2>
                            <p style={{ textAlign: 'left', display: 'block' }}>
                                <i>We help customers build world-class construction projects since 2001</i><br /><br />
                                In Progress status signifies that a task or process has started but is not yet fully finished.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="accordion" id="accordionExample">
                            {faqData.map((faq, index) => (
                                <div className="accordion-item" key={faq._id}>
                                    <h5 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse${index}`}
                                        >
                                            {faq.questionText}
                                        </button>
                                    </h5>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {faq.answerText}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
