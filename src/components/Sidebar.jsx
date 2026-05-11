import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Ticket, 
  TrendingUp, 
  Sparkles, 
  Settings,
  Palmtree
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Calendar size={20} />, label: 'Events' },
    { icon: <Users size={20} />, label: 'Visitors' },
    { icon: <Ticket size={20} />, label: 'Tickets' },
    { icon: <TrendingUp size={20} />, label: 'Revenue' },
    { icon: <Sparkles size={20} />, label: 'AI Insights' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Palmtree className="logo-icon" size={32} />
        <span>Jeddah Season</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <a href={`#${item.label.toLowerCase().replace(' ', '-')}`}>
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="upgrade-card">
          <p>Get AI Pro features</p>
          <button className="upgrade-btn">Upgrade</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
