import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming your CSS is in App.css

const ServiceCard = ({ service }) => {
    const iconImageUrl = service.iconImage || "https://via.placeholder.com/50x50"; // Use iconImage from the API

    return (
        <div className="service-card">
            <div className="service-box">
                <div className="img-box">
                    <img
                        src={iconImageUrl}
                        alt={service.serviceName}
                        className="service-icon"
                    />
                </div>
                <div className="text-box">
                    <h4 className="service-title">{service.serviceName}</h4>
                    <p className="service-description">{service.description.substring(0, 100)}...</p>
                </div>
                <Link to={`/servicedetails/${service._id}`} className="service-link">
                    <i className="fal fa-long-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
