import React from 'react';
import { Calendar, Users, Ticket, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCards.css';

const StatCard = ({ icon, label, value, growth, isPositive }) => (
  <div className="stat-card">
    <div className="stat-icon-wrapper">
      {icon}
    </div>
    <div className="stat-details">
      <span className="stat-label">{label}</span>
      <h3 className="stat-value">{value}</h3>
      <div className={`stat-growth ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{growth}%</span>
      </div>
    </div>
  </div>
);

const StatsCards = () => {
  const stats = [
    {
      icon: <Calendar size={24} className="icon-blue" />,
      label: 'Total Events',
      value: '42',
      growth: '12',
      isPositive: true
    },
    {
      icon: <Users size={24} className="icon-teal" />,
      label: 'Total Visitors',
      value: '1.2M',
      growth: '8',
      isPositive: true
    },
    {
      icon: <Ticket size={24} className="icon-lime" />,
      label: 'Tickets Sold',
      value: '850K',
      growth: '15',
      isPositive: true
    },
    {
      icon: <DollarSign size={24} className="icon-pink" />,
      label: 'Revenue',
      value: '$24.5M',
      growth: '4',
      isPositive: true
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
