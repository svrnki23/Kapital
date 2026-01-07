import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
    return (

        <nav className="navbar">

            {/* Left section of the navbar */}
            <div className="nav-left">
                <button type="button" className="menu-btn" aria-label="Open Menu" onClick={toggleSidebar}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Center section of the navbar */}
            <div className="nav-center">
                {/* Wrapped h1 in a Link */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="shiny-gold">KAPITAL</h1>
                </Link>
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
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        {/* 1. DEFINE THE GOLD PAINT */}
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#bf953f" />
                                <stop offset="25%" stopColor="#fcf6ba" />
                                <stop offset="50%" stopColor="#b38728" />
                                <stop offset="75%" stopColor="#fbf5b7" />
                                <stop offset="100%" stopColor="#aa771c" />
                            </linearGradient>
                        </defs>

                        {/* 2. APPLY THE PAINT TO THE SHAPES */}
                        {/* Notice stroke="url(#goldGradient)" */}
                        <path stroke="url(#goldGradient)" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle stroke="url(#goldGradient)" cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;