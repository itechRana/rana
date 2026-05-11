import React from 'react';
import EventCard from './EventCard';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      name: 'City Walk Concert',
      location: 'Jeddah City Walk',
      date: 'Oct 25, 2026',
      category: 'Music',
      color: '#1f6593',
      image: 'https://picsum.photos/seed/music/400/250'
    },
    {
      name: 'Jeddah Gaming Zone',
      location: 'Jeddah Pier',
      date: 'Oct 28, 2026',
      category: 'Gaming',
      color: '#5eb090',
      image: 'https://picsum.photos/seed/gaming/400/250'
    },
    {
      name: 'Beach Festival',
      location: 'Obhur Corniche',
      date: 'Nov 02, 2026',
      category: 'Festival',
      color: '#9ece47',
      image: 'https://picsum.photos/seed/beach/400/250'
    },
    {
      name: 'Formula Race Experience',
      location: 'Jeddah Corniche Circuit',
      date: 'Nov 05, 2026',
      category: 'Sports',
      color: '#eab2bb',
      image: 'https://picsum.photos/seed/race/400/250'
    }
  ];

  return (
    <section className="events-section">
      <div className="section-header">
        <h2>Featured Events</h2>
        <button className="view-all">View All</button>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
