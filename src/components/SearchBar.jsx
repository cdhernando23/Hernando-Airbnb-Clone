import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-section">
          <label className="search-label">Where</label>
          <input 
            type="text" 
            placeholder="Search destinations"
            className="search-input"
          />
        </div>
        
        <div className="search-divider"></div>
        
        <div className="search-section">
          <label className="search-label">Check in</label>
          <input 
            type="text" 
            placeholder="Add dates"
            className="search-input"
          />
        </div>
        
        <div className="search-divider"></div>
        
        <div className="search-section">
          <label className="search-label">Check out</label>
          <input 
            type="text" 
            placeholder="Add dates"
            className="search-input"
          />
        </div>
        
        <div className="search-divider"></div>
        
        <div className="search-section">
          <label className="search-label">Who</label>
          <input 
            type="text" 
            placeholder="Add guests"
            className="search-input"
          />
        </div>
        
        <button className="search-button">
          <span className="search-icon">🔍</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
