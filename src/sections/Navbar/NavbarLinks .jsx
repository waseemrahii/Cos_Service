import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarLinks({ links, dropdownLinks }) {
    return (
        <ul className="navbar-nav mx-auto">
            {links.map((link, index) => (
                <li className="nav-item" key={index}>
                    <Link className="nav-link" to={link.path}>
                        {link.label}
                    </Link>
                </li>
            ))}
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle">Pages</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdownLinks.map((dropdownLink, index) => (
                        <li key={index}>
                            <Link 
                                to={dropdownLink.path} 
                                className="dropdown-item"
                                style={{ fontWeight: 'normal' }} // Set font weight to normal
                            >
                                {dropdownLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}
