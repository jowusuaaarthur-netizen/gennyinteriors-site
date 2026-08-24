import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to Jenny Interiors</h2>
            <p>Transform your spaces into timeless, sophisticated environments</p>
            <Link to="/portfolio" className="cta-button">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Interior Design</h3>
              <p>Custom design solutions tailored to your refined taste and needs.</p>
            </div>
            <div className="feature-card">
              <h3>Renovation</h3>
              <p>Elegant renovation services to revitalize your space with sophistication.</p>
            </div>
            <div className="feature-card">
              <h3>Consultation</h3>
              <p>Expert guidance from experienced design professionals.</p>
            </div>
            <div className="feature-card">
              <h3>Project Management</h3>
              <p>Meticulous end-to-end project coordination and execution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Elevate Your Space?</h2>
          <p>Get in touch with us today for a complimentary consultation</p>
          <Link to="/contact" className="cta-button primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
