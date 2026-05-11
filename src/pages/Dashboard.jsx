import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import StatsCards from '../components/StatsCards';
import EventsSection from '../components/EventsSection';
import Analytics from '../components/Analytics';
import AIInsights from '../components/AIInsights';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <div className="content-area">
          <HeroBanner />
          <StatsCards />
          <div className="grid-container">
            <EventsSection />
            <div className="side-sections">
              <Analytics />
              <AIInsights />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
