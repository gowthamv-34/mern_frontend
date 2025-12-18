import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1>🛍️ E-Commerce Store</h1>
                </div>
                <div className="navbar-subtitle">
                    <p>Product Management Dashboard</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
