import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import './AIInsights.css';

const AIInsights = () => {
  const insights = [
    {
      icon: <Zap size={18} />,
      title: 'Most Popular Event',
      desc: 'City Walk Concert is trending with 95% occupancy.',
      color: 'var(--primary-blue)'
    },
    {
      icon: <Sparkles size={18} />,
      title: 'Expected Traffic',
      desc: '30% increase expected this weekend at Pier.',
      color: 'var(--primary-teal)'
    }
  ];

  return (
    <section className="ai-insights-card">
      <div className="ai-header">
        <Sparkles size={20} className="ai-icon" />
        <h3>AI Smart Insights</h3>
      </div>
      <div className="insights-list">
        {insights.map((insight, index) => (
          <div key={index} className="insight-item">
            <div className="insight-icon" style={{ backgroundColor: insight.color }}>
              {insight.icon}
            </div>
            <div className="insight-content">
              <h4>{insight.title}</h4>
              <p>{insight.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="recommended-action">
        <p>Recommended Action:</p>
        <button className="action-btn">
          <span>Increase security staff for Pier</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default AIInsights;
