import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Column 1 - brand and vision */}
                <div className="footer-brand">
                    <h2 className="shiny-gold">KAPITAL</h2>
                    <p>Experience the thrill of the drive. Premium luxury vehicles available at your command.</p>
                </div>


                {/* Column 2 - explore links */}
                <div className="footer-column">
                    <h4 className="shiny-gold">EXPLORE</h4>
                    <a href="#fleet">THE GARAGE</a>
                    <a href="#services">Services</a>
                    <a href="#membership">Membership</a>
                    <a href="#about">About</a>
                </div>


                {/* Column 3 - legal support  */}
                <div className="footer-column">
                    <h4 className="shiny-gold">SUPPORT</h4>
                    <a href="#help">Help Center</a>
                    <a href="#terms">Terms & Conditions</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Column 4 - Contact info */}
                <div className="footer-column">
                    <h4 className="shiny-gold">VISIT US</h4>
                    <p>123 Road Street</p>
                    <p>Cumming, Georgia, 12345</p>
                    <br />
                    <p className="shiny-gold">(123)-456-7890</p>
                </div>


            </div>

            {/* The bottom kapital bar */}
            <div className="footer-bottom-bar">
                <p className="shiny-gold">&copy; 2024 KAPITAL. All Rights Reserved.</p>
            </div>

        </footer>
    )


}


export default Footer;