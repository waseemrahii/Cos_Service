import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function ServiceDetails() {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/services/${serviceId}`);
                setService(response.data);
            } catch (error) {
                console.error('Error fetching service details:', error);
            }
        };

        fetchServiceDetails();
    }, [serviceId]);

    if (!service) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <section className="service-details py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="img-box mb-3" style={{ height: '400px', width: '500px'}}>
                                <img
                                    src={service.image}                                      alt={service.serviceName}
                                    className="img-fluid h-100 w-100 object-fit-cover rounded"
                                />
                            </div>
                            <div className="description">
                                <h3>{service.serviceName}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="side-bar">
                                <ul className="links">
                                    <li className="bgColor">
                                        <a href={`/servicedetails/${service._id}`}>{service.serviceName}</a>
                                    </li>
                                    {/* Add more related services here if necessary */}
                                </ul>
                                <div className="contact-box mt-5">
                                    {/* Removed iconImage and simplified the contact section */}
                                    <div className="text mt-3">
                                        <h4>Available for any type of construction</h4>
                                        <a href="/contact" className="btn-custom btn-dark">Contact Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
