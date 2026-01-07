import React from "react";
import './fleet.css';

const Fleet = () => {
    const features = [
        {
            car: "💎",
            title: "Audi Q8",
            desc: "Access a garage reserved only for those who appreciate the extraordinary."
        },

        {
            car: "⚡️",
            title: "BMW M4",
            desc: "Experience a seamless reservation process designed for your schedule."
        },

        {
            car: "🛡️",
            title: "GENESIS G80",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        },

        {
            car: "🛡️",
            title: "TOYOTA COROLLA",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        },

        {
            car: "🛡️",
            title: "NISSAN ROGUE",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        },

        {
            car: "🛡️",
            title: "TOYOTA CAMRY",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        },

        {
            car: "🛡️",
            title: "TOYOTA HIGHLANDER",
            desc: "Every rental includes comprehensive insurance and 24/7 roadside support."
        }

    ];

    return (
        <section className="why-section" id="services">
            <div className="why-header">
                <h2 className="section-title shiny-gold">THE FLEET</h2>
                <p className="section-subtitle shiny-gold">Arrive in style. Experience our premium collection. </p>
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

export default Fleet;