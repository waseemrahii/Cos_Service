import React, { useState } from 'react';
import axios from 'axios';

export default function Message({ contactDetails }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required.';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number should contain only digits.';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/v1/contact/create', formData);
            setSubmitMessage(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setErrors({});
        } catch (error) {
            console.error('Error while sending contact message:', error);
            setSubmitMessage('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="row gy-5 gy-lg-0">
                        <div className="col-lg-8 col-md-12">
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="_token" defaultValue="rd7l6sN7tCanHaan3qaIrxGfuZq8eHvPt2cdM5UX" />
                                <h2 style={{ textAlign: 'left', display: 'block' }} className="mb-5">Leave a Message</h2>
                                {submitMessage && <p>{submitMessage}</p>}
                                <div className="row g-4">
                                    <div className="input-box col-md-6 col-12">
                                        <input
                                            className="form-control"
                                            name="name"
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                                    </div>
                                    <div className="input-box col-md-6 col-12">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                            autoComplete="off"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                                    </div>
                                    <div className="input-box col-md-6 col-12">
                                        <input
                                            className="form-control"
                                            name="phone"
                                            type="text"
                                            placeholder="Phone Number"
                                            autoComplete="off"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                                    </div>
                                    <div className="input-box col-md-6 col-12">
                                        <input
                                            className="form-control"
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                            autoComplete="off"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="input-box col-12">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            cols={30}
                                            rows={3}
                                            placeholder="Write Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                                    </div>
                                    <div className="input-box col-12" style={{ textAlign: 'left' }}>
                                        <button className="btn-custom" type="submit">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="text-box">
                                <div className="overlay">
                                    <div className="header-text">
                                        <h4>Our Contact Details</h4>
                                        <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                                    </div>
                                    <div className="row">
                                        <div className="info-box col-md-12">
                                            <div className="icon-box">
                                                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                            </div>
                                            <div className="text">
                                                <h5>Address</h5>
                                                <p>{contactDetails.address}</p>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-12">
                                            <div className="icon-box">
                                                <i className="fas fa-envelope" aria-hidden="true" />
                                            </div>
                                            <div className="text">
                                                <h5>Email</h5>
                                                <p>{contactDetails.email}</p>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-12">
                                            <div className="icon-box">
                                                <i className="fas fa-phone-alt" aria-hidden="true" />
                                            </div>
                                            <div className="text">
                                                <h5>Phone</h5>
                                                <p>{contactDetails.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map">
                <iframe
                    src={contactDetails.mapSrc}
                    alt=""
                    title={contactDetails.mapTitle}
                    width="100%"
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
}
