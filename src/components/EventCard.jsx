import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ image, name, location, date, category, color }) => {
  return (
    <div className="event-card">
      <div className="event-image" style={{ backgroundColor: color }}>
        <img src={image} alt={name} onError={(e) => e.target.style.display='none'} />
        <span className="category-tag">{category}</span>
        <button className="favorite-btn">
          <Heart size={18} />
        </button>
      </div>
      <div className="event-info">
        <h3>{name}</h3>
        <div className="event-meta">
          <div className="meta-item">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
          <div className="meta-item">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
        <div className="event-actions">
          <button className="interested-btn">Interested</button>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
