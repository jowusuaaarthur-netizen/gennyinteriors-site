import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <h2>About Jenny Interiors</h2>
        
        <section className="about-intro">
          <p>
            Jenny Interiors is a distinguished interior design studio dedicated to creating 
            sophisticated, timeless spaces that reflect refined taste. With extensive expertise 
            and an unwavering commitment to excellence, we transform interiors into personalized 
            works of art that stand the test of time.
          </p>
        </section>

        <section className="mission">
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional interior design solutions that embody elegance, functionality, 
            and enduring beauty. We honor the principles of classic design while embracing the 
            comfort and convenience of contemporary living.
          </p>
        </section>

        <section className="values">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Timeless Elegance</h4>
              <p>We create spaces that transcend trends, embodying enduring sophistication.</p>
            </div>
            <div className="value-item">
              <h4>Craftsmanship</h4>
              <p>We prioritize quality in every detail, from materials to execution.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We maintain transparency, discretion, and honesty in all client relationships.</p>
            </div>
            <div className="value-item">
              <h4>Client Satisfaction</h4>
              <p>Your vision and comfort are at the heart of everything we create.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h3>Meet Our Team</h3>
          <p>
            Our team comprises experienced designers and artisans who share a passion for 
            creating beautiful, functional spaces. With backgrounds in architecture, fine arts, 
            and design, we bring diverse expertise to every project.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
