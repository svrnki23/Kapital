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
                <button className="profile-btn" aria-label="User Profile">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;