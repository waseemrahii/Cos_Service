import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamCard({ id, image, name, designation, socialLinks, onClick }) {
    return (
        <div className="team-box card shadow-sm" style={{ height: '500px' }}>
            <div className="img-box position-relative" style={{ height: '350px', overflow: 'hidden' }}>
                <img
                    className="img-fluid w-100 h-100"
                    src={image} // Use 'images' field
                    alt={name}
                    style={{ objectFit: 'cover', width: '1000%' }} // Ensure width is set to 100%
                    onError={(e) => {
                        console.error('Failed to load image:', e.target.src);
                        e.target.src = "https://via.placeholder.com/600x400"; // Fallback for broken images
                    }}
                />
                <div className="social-links position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center">
                    <a href={socialLinks.facebook || '#'} target="_blank" rel="noopener noreferrer" className="social-icon mx-1">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href={socialLinks.twitter || '#'} target="_blank" rel="noopener noreferrer" className="social-icon mx-1">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href={socialLinks.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="social-icon mx-1">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </div>
            <div className="text-box text-center p-3">
                <h4 className="mb-1">
                    <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#memberDetailsModal"
                        className="modal-btn text-dark text-decoration-none"
                        onClick={onClick} // Trigger the modal and set the member
                    >
                        {name}
                    </Link>
                </h4>
                <span className="text-muted">{designation}</span>
            </div>
        </div>
    );
}
