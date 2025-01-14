import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FooterQuickLinks({ links }) {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="footer-box text-center text-md-start">
            <h4>Quick Links</h4>
            <ul className="list-unstyled mt-3" style={{ cursor: 'pointer' }}>
                {links.map((link, index) => (
                    <li 
                        key={index} 
                        onClick={() => handleNavigation(link.path)} 
                        className="mb-2"
                    >
                        - {link.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
