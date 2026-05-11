import React from 'react';
import { Twitter, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>Jeddah Season</h4>
          <p>The city's most vibrant festival season.</p>
        </div>
        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={16} />
            <span>info@jeddahseason.sa</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>+966 12 345 6789</span>
          </div>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><Twitter size={20} /></a>
          <a href="#" className="social-icon"><Instagram size={20} /></a>
          <a href="#" className="social-icon"><Facebook size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Jeddah Season. All rights reserved.</p>
        <p className="made-for">Made for Jeddah Season</p>
      </div>
    </footer>
  );
};

export default Footer;
