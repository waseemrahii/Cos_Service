// NavbarBrand.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarBrand({ logo, altText, link }) {
    return (
        <Link className="navbar-brand" to={link}>
            <img src={logo} alt={altText} style={{ width: '60px', height: '60px' }} />
        </Link>
    );
}
