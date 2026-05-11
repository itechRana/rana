import React from 'react';
import './Analytics.css';

const Analytics = () => {
  const data = [
    { label: 'Sun', value: 65, color: 'var(--primary-blue)' },
    { label: 'Mon', value: 45, color: 'var(--primary-teal)' },
    { label: 'Tue', value: 85, color: 'var(--primary-lime)' },
    { label: 'Wed', value: 30, color: 'var(--primary-pink)' },
    { label: 'Thu', value: 95, color: 'var(--primary-blue)' },
  ];

  return (
    <section className="analytics-card">
      <div className="analytics-header">
        <h3>Visitor Traffic</h3>
        <select className="period-select">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="chart-container">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-wrapper">
            <div 
              className="chart-bar" 
              style={{ height: `${item.value}%`, backgroundColor: item.color }}
            >
              <span className="bar-tooltip">{item.value}k</span>
            </div>
            <span className="bar-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="analytics-stats">
        <div className="mini-stat">
          <span className="mini-label">Popular Zone</span>
          <span className="mini-value">City Walk</span>
        </div>
        <div className="mini-stat">
          <span className="mini-label">Growth</span>
          <span className="mini-value positive">+18%</span>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
