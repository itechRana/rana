import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Jeddah Season Dashboard</h1>
        <p>Manage events, visitors, and tickets in one place with real-time data and AI-powered insights.</p>
        <button className="explore-btn">Explore Events</button>
      </div>
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
