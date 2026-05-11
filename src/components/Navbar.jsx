import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="mobile-menu-btn">
        <Menu size={24} />
      </div>
      
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input type="text" placeholder="Search events, tickets..." />
      </div>
      
      <div className="nav-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Ahmed Ali</span>
            <span className="user-role">Admin</span>
          </div>
          <div className="avatar">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
