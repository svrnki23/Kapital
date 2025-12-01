import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            {/* Hero element is the video section of the website */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source src="/rr.mp4" type="video/mp4" />
            </video>

            <div className="hero-content">
                <div className="accent-line"></div>
                <h1>
                    EVERY CAR. <br />
                    EVERY JOURNEY.
                </h1>
                <button className="btn-outline">Book Now</button>
            </div>
        </section>
    );
};

export default Hero;