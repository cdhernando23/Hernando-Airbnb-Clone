import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">🏠</div>
          <span className="logo-text">airbnb</span>
        </div>

        {/* Navigation Tabs */}
        <div className="navbar-tabs">
          <div 
            className={`nav-tab ${activeTab === 'homes' ? 'active' : ''}`}
            onClick={() => handleTabClick('homes')}
          >
            <div className="tab-icon">🏠</div>
            <span>Homes</span>
          </div>
          <div 
            className={`nav-tab ${activeTab === 'experiences' ? 'active' : ''}`}
            onClick={() => handleTabClick('experiences')}
          >
            <div className="tab-icon">🎈</div>
            <span>Experiences</span>
            <span className="new-badge">NEW</span>
          </div>
          <div 
            className={`nav-tab ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => handleTabClick('services')}
          >
            <div className="tab-icon">🔔</div>
            <span>Services</span>
          </div>
        </div>

        {/* User Actions */}
        <div className="navbar-actions">
          <button className="host-button">Become a host</button>
          <button className="globe-button">🌐</button>
          <button className="menu-button">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
