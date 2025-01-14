import React from 'react';
import NavbarBrand from '../sections/Navbar/NavbarBrand';
import NavbarLinks from '../sections/Navbar/NavbarLinks ';
import NavbarCart from '../sections/Navbar/NavbarCart';
import CosmicLogo from '../assets/CosmicLogo.png';
import { NavbarData } from '../utils/NavbarData';
import { useAuth } from '../../context/auth-context';
export default function Navbar() {
    const { authState } = useAuth(); // Use the authState from the auth context
    const { isAuthenticated } = authState; // Destructure isAuthenticated

    // if (!isAuthenticated) {
    //     return null; // Hide Navbar if user is not authenticated
    // }

    return (
        <nav className="navbar navbar-expand-lg fixed-to">
            <div className="container">
                <NavbarBrand logo={CosmicLogo} altText="Construm" link="/" />
                <button className="navbar-toggler p-0" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="far fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* {isAuthenticated && ( */}
                        <NavbarLinks links={NavbarData.links} dropdownLinks={NavbarData.dropdownLinks} />
                    {/* )} */}
                </div>
                <NavbarCart cartSubtotal={NavbarData.cartSubtotal} cartCount={NavbarData.cartCount} />
            </div>
        </nav>
    );
}
