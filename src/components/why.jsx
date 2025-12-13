import React from "react";
import './why.css';

const why = () => {
    const features = [
        {
            icon: "💎",
            title: "Premium Fleet",
            desc: "Access an exclusive collection of high-performance vehicles."
        },

        {
            icon: "⚡️",
            title: "Instant Booking",
            desc: "Placeholder line, haven't thought of what to say here but have to say something."
        },

        {
            icon: "🛡️",
            title: "Full Coverage",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        }

    ];

    return (
        <section className="why-section" id="services">
            <div className="why-header">
                <h2 className="section-title shiny-gold">WHY KAPITAL?</h2>
                <p className="section-subtitle shiny-gold">Redefining the art of modern mobility. </p>
            </div>

            <div className="features-grid">
                {features.map((item, index) => (
                <div className="feature-card" key={index}>
                    <div className="icon-wrapper">
                    <span className="feature-icon">{item.icon}</span>
                    </div>
                    <h3 className="feature-title shiny-gold">{item.title}</h3>
                    <p className="feature-desc shiny-gold">{item.desc}</p>
                </div>
                ))}
            </div>
        </section>

    );
}

export default why;