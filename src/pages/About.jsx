import React from 'react';
import Banner from '../components/Banner';
import '../App.css';

export default function About() {
    // Static data
    const aboutData = {
        "title": "Know Us Better",
        "description": 
        "Cosmic Construction Int’l (Private) Limited has come a long way to symbolize commitment, distinction and professional excellence by meeting the stringent, demanding and extra ordinary work requirements of high engineering, importance involving civil, electrical and mechanical works for the last 18 years. The ever-increasing efforts towards attaining better and new business ventures have exposed the company to multitude of engineering disciplines. Now it is company's prerogative to be working in infrastructure, housing, design and environmental areas other than its strong standing in industrial projects for, chemicals, road, highways and buildings. CCIPL boasts and claims to have a reputation of company delivering the projects ahead of schedule. This has consolidated trust and confidence with our business entrepreneurs. The repetition of orders we have been getting from the clients is a touchstone of their reliance in CCIPL and clear emblem of the comfort extended by us.",
        "images": "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    return (
        <>
            <Banner />
            <div>
                <section className="about-section about-page py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="img-box" style={{ height: '500px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        src={aboutData.images} 
                                        alt={aboutData.title}
                                        className="img-fluid"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-box">
                                    <h2 className="mb-4">{aboutData.title}</h2>
                                    <p className="lead" style={{ textAlign: 'justify' }}>
                                        {aboutData.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="company-achievement py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-5">
                                <h2 className="text-center">Our Achievements</h2>
                            </div>
                            <div className="col-12 gy-5 noBorder mb-4">
                                <div className="achievement-box d-flex align-items-start">
                                    <div className="date text-center me-4 position-relative">
                                        <div className="circle" style={{
                                            background: '#ff6600',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            width: '120px',
                                            height: '120px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '26px',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            zIndex: '1',
                                            // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        }}>
                                            2001
                                        </div>
                                        <div className="line" style={{
                                            position: 'absolute',
                                            width: '4px',
                                            background: '#ddd',
                                            height: 'calc(100% + 120px)',
                                            top: '60px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: '0'
                                        }}></div>
                                    </div>
                                    <div className="info ms-5" style={{ textAlign: 'left' }}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>Company Starting</h4>
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
                                            We believe in a collaborative approach, working closely with our clients to understand their goals and aspirations. This partnership allows us to deliver tailored solutions that not only meet but exceed expectations. At Cosmic Construction, integrity, reliability, and craftsmanship are at the heart of everything we do. Our passion for building inspiring spaces is evident in every project we undertake, whether it's a new construction or a transformative renovation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 gy-5 noBorder mb-4">
                                <div className="achievement-box d-flex align-items-start">
                                    <div className="date text-center me-4 position-relative">
                                        <div className="circle" style={{
                                            background: '#ff6600',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            width: '120px',
                                            height: '120px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '26px',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            zIndex: '1',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        }}>
                                            2005
                                        </div>
                                        <div className="line" style={{
                                            position: 'absolute',
                                            width: '4px',
                                            background: '#ddd',
                                            height: 'calc(100% + 120px)',
                                            top: '60px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: '0'
                                        }}></div>
                                    </div>
                                    <div className="info ms-5" style={{ textAlign: 'left' }}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>Increased company members by 90 plus</h4>
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
                                            Our team of dedicated professionals brings together years of experience, innovative thinking, and an unwavering dedication to quality. From residential homes to large commercial complexes, we handle every project with precision and care, ensuring that each structure we create is a masterpiece of design, functionality, and sustainability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 gy-5 noBorder">
                                <div className="achievement-box d-flex align-items-start">
                                    <div className="date text-center me-4 position-relative">
                                        <div className="circle" style={{
                                            background: '#ff6600',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            width:'1aaa20px',
                                            height: '120px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '26px',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            zIndex: '1',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        }}>
                                            2010
                                        </div>
                                    </div>
                                    <div className="info ms-5" style={{ textAlign: 'left' }}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>Got best company award on national level</h4>
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
                                            At Cosmic Construction, we are more than just builders; we are creators of dreams and architects of visions. Established with a commitment to excellence, our company has been a cornerstone in the construction industry, delivering world-class projects that stand the test of time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

