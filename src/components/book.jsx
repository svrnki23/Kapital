// src/components/BookingSection.jsx
import React from 'react';
import './book.css';

const BookingSection = () => {
  return (
    <section id="booking" className="booking-section" style={{backgroundImage: "url('/range.png')"}}>
      <div className="glass-panel">
        
        {/* LEFT SIDE: Big Booking Engine */}
        <div className="booking-engine">
          {/* Replaced Big Title with a functional header */}
          <div className="section-header">
            <h3 className='shiny-gold'>Start Your Journey</h3>
          </div>

          <div className="booking-form">
            <div className="input-large">
              <label className='shiny-gold'>LOCATION</label>
              <div className="input-wrapper">
                <span className="input-icon shiny-gold">📍</span>
                <input type="text" placeholder="Enter pickup location" />
              </div>
            </div>

            <div className="dates-row">
              <div className="input-large">
                <label className='shiny-gold'>FROM</label>
                <div className="input-wrapper">
                  <input type="date" />
                </div>
              </div>
              <div className="input-large">
                <label className='shiny-gold'>TO</label>
                <div className="input-wrapper">
                  <input type="date" />
                </div>
              </div>
            </div>

            <div className="action-row">
              <button className="btn-primary shiny-gold">
                <span className="btn-icon">🔍</span> BROWSE
              </button>
              <button className="btn-primary shiny-gold">ASK AI</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Upcoming with Images */}
        <div className="upcoming-widget">
          <div className="section-header">
            <h3 className='shiny-gold'>🕝 UPCOMING</h3>
          </div>
          
          <div className="car-list">
            
            {/* CAR 1: Audi */}
            <div className="car-card">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=200&auto=format&fit=crop" alt="Audi A4" className="car-thumb" />
              <div className="car-details">
                <div className="car-top">
                  <h4 className='shiny-gold'>Audi A4</h4>
                  <span className="price shiny-gold">$89<small>/day</small></span>
                </div>
                <div className="car-bottom">
                  <span className="date-range shiny-gold">Dec 15 - Dec 18</span>
                  <span className="status available shiny-gold">Available</span>
                </div>
              </div>
            </div>

            {/* CAR 2: Toyota */}
            <div className="car-card">
              <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=200&auto=format&fit=crop"  alt="Toyota RAV4" className="car-thumb" /> 
              <div className="car-details">
                 <div className="car-top">
                  <h4 className='shiny-gold'>Toyota RAV4</h4>
                  <span className="price shiny-gold">$75<small>/day</small></span>
                </div>
                <div className="car-bottom">
                  <span className="date-range shiny-gold">Dec 20 - Dec 25</span>
                  <span className="status available shiny-gold">Available</span>
                </div>
              </div>
            </div>

             {/* CAR 3: Honda */}
             <div className="car-card">
              <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=200&auto=format&fit=crop" alt="Honda Civic" className="car-thumb" />
              <div className="car-details">
                 <div className="car-top">
                  <h4 className='shiny-gold'>Honda Civic</h4>
                  <span className="price shiny-gold">$65<small>/day</small></span>
                </div>
                <div className="car-bottom">
                  <span className="date-range shiny-gold">Dec 28 - Jan 02</span>
                  <span className="status reserved shiny-gold">Reserved</span>
                </div>
              </div>
            </div>

          </div>

          <button className="view-all-btn shiny-gold">View All</button>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;