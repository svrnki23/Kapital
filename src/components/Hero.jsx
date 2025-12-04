import React from "react";
import './Hero.css';

const Hero = () => {

    // creating the scroll function so when user clicks on "book now", the site scrolls down to the booking section of the website
    const scrollToBooking = () => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection){
            bookingSection.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <section className="hero-container">
            {/* Hero element is the video section of the website */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source src="/rr.mp4" type="video/mp4" />
            </video>

            <div className="hero-content">
                <div className="accent-line"></div>
                <h1 className="shiny-gold">
                    EVERY CAR. <br />
                    EVERY JOURNEY.
                </h1>
                <button onClick={scrollToBooking}>
                    <span className="btn-text">Book Now</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;