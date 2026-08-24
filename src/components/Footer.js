import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jenny Interiors</h3>
            <p>Creating beautiful, functional spaces that reflect your style and sophistication.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@jennyinteriors.com">info@jennyinteriors.com</a></p>
            <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jenny Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
