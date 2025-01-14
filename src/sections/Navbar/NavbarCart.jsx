import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarCart() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
        if (isDropdownOpen) {
            const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(storedCartItems);
            calculateSubtotal(storedCartItems);
        }
    }, [isDropdownOpen]);

    const calculateSubtotal = (items) => {
        const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
        setCartSubtotal(subtotal.toFixed(2));
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // if (!isAuthenticated) {
    //     return null; // Don't render if the user is not authenticated
    // }

    const dropdownStyles = {
        maxHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '320px',
        position: 'absolute',
        right: '0',
        zIndex: 1000,
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        padding: '10px',
        borderRadius: '8px',
    };

    const itemStyles = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        padding: '8px 0', 
        borderBottom: '1px solid #eee',
    };

    const imgStyles = {
        width: '60px',
        height: '60px',
        marginRight: '10px',
        borderRadius: '4px',
        objectFit: 'cover',
    };

    const cartBottomStyles = {
        padding: '10px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#fff',
        flexShrink: 0,
    };

    const buttonStyles = {
        padding: '8px 12px', 
        fontSize: '14px',
        backgroundColor: '#x    ', 
        color: '#fff',
        borderRadius: '4px',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
        width: '48%',
    };

    // Scrollbar styles for cart dropdown
    const scrollbarStyles = `
        .cart-dropdown::-webkit-scrollbar {
            width: 6px;
        }
        .cart-dropdown::-webkit-scrollbar-thumb {
            background-color: #bbb;
            border-radius: 4px;
        }
        .cart-dropdown::-webkit-scrollbar-thumb:hover {
            background-color: #888;
        }
        .cart-dropdown {
            scrollbar-width: thin;
            scrollbar-color: #bbb #fff;
        }
    `;

    // Fallback for missing images
    const handleImageError = (e) => {
        e.target.src = '/path/to/placeholder-image.jpg'; // Provide a path to a default image
    };

    return (
        <span className="navbar-text">
            <style>{scrollbarStyles}</style> 
            <div className="shopping-cart" ref={dropdownRef}>
                <button
                    ref={buttonRef}
                    className="dropdown-toggle cart-button"
                    onClick={toggleDropdown}
                >
                    <i className="fal fa-shopping-cart cart-icon"></i>
                    <span className="count total-count cart-count">{cartItems.length}</span>
                </button>
                {isDropdownOpen && (
                    <ul style={dropdownStyles} className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
                        <div className="dropdown-box show-cart">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} style={itemStyles}>
                                        <img
                                            src={item.thumbnail} // Use the thumbnail directly
                                            alt={item.productName}
                                            style={imgStyles}
                                            loading="lazy"
                                            onError={handleImageError} // Handle image loading errors
                                        />
                                        <div>
                                            <p style={{ margin: 0, fontWeight: 'bold' }}>{item.productName}</p>
                                            <p style={{ margin: 0, color: '#888' }}>Price: ${item.price}</p>
                                            <p style={{ margin: 0, color: '#888' }}>Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p style={{ textAlign: 'center', padding: '10px' }}>Your cart is empty.</p>
                            )}
                        </div>
                        <div style={cartBottomStyles}>
                            <div className="text_area d-flex justify-content-between">
                                <p style={{ margin: 0, fontWeight: 'bold' }}>Cart Subtotal:</p>
                                <div>
                                    <small>$</small>
                                    <span className="total-cart">{cartSubtotal}</span>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <Link
                                    to="/cart"
                                    style={buttonStyles}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E20613'}
                                >
                                    Cart
                                </Link>
                                <Link
                                    to="/checkout"
                                    style={buttonStyles}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#20613'}
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </span>
    );
}
