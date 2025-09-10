import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#safety">Safety information</a></li>
            <li><a href="#cancellation">Cancellation options</a></li>
            <li><a href="#covid">Our COVID-19 Response</a></li>
            <li><a href="#report">Report a neighborhood concern</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Community</h4>
          <ul className="footer-links">
            <li><a href="#disability">Disability support</a></li>
            <li><a href="#neighbors">Neighbor support</a></li>
            <li><a href="#trust">Trust & Safety</a></li>
            <li><a href="#hosting">Hosting responsibly</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Hosting</h4>
          <ul className="footer-links">
            <li><a href="#host">Try hosting</a></li>
            <li><a href="#protection">AirCover for Hosts</a></li>
            <li><a href="#resources">Hosting resources</a></li>
            <li><a href="#community">Community forum</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Airbnb</h4>
          <ul className="footer-links">
            <li><a href="#news">Newsroom</a></li>
            <li><a href="#features">New features</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#investors">Investors</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>© 2025 Airbnb Clone (Hernando, Christian D.) All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#sitemap">Sitemap</a>
            <a href="#company">Company details</a>
          </div>
          <div className="footer-language">
            <button className="language-button">
              🌐 English (US)
            </button>
            <button className="currency-button">
              ₱ PHP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
