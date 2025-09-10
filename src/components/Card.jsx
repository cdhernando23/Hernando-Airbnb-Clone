import React from 'react';
import './Card.css';

const Card = ({ property }) => {
  const {
    image,
    title,
    location,
    price,
    rating,
    isGuestFavorite = false
  } = property;

  return (
    <div className="property-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        {isGuestFavorite && (
          <div className="guest-favorite-badge">
            Guest favorite
          </div>
        )}
        <button className="favorite-button">
          <span className="heart-icon">♡</span>
        </button>
      </div>
      
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-location">{location}</div>
        <div className="card-price">{price}</div>
        <div className="card-rating">
          <span className="star">★</span>
          <span className="rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
