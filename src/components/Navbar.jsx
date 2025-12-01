import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">

            {/* Left section of the navbar */}
            <div className="nav-left">
                <button className="menu-btn" aria-label="Open Menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Center section of the navbar */}
            <div className="nav-center">
                <h1>KAPITAL</h1>
            </div>

            {/* Right section of the navbar */}
            <div className="nav-right">
                <button className="profile-btn">
                    <span className="user-icon">👤</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;