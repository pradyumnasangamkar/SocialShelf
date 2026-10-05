import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="nav-brand" style={{ marginBottom: '1rem' }}>
              <span className="nav-brand-icon">📖</span>
              <span>Social<span style={{ color: 'var(--primary)' }}>Shelf</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '320px', lineHeight: 1.7 }}>
              Empowering readers through community-driven book sharing, low-cost rentals, and open knowledge exchange. Read freely, donate generously.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/books" style={{ color: 'inherit' }}>Browse Catalog</Link></li>
              <li><Link to="/rent" style={{ color: 'inherit' }}>Rent a Book</Link></li>
              <li><Link to="/donate" style={{ color: 'inherit' }}>Book Donations</Link></li>
              <li><Link to="/events" style={{ color: 'inherit' }}>Community Reading Events</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Get Involved
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/volunteer" style={{ color: 'inherit' }}>Become a Volunteer</Link></li>
              <li><Link to="/events" style={{ color: 'inherit' }}>Host a Book Club</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit' }}>Drop-off Centers</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit' }}>Support & Feedback</Link></li>
            </ul>
          </div>

          {/* Library Hours */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Hub Hours
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <strong>Mon - Fri:</strong> 9:00 AM - 8:00 PM<br />
              <strong>Sat - Sun:</strong> 10:00 AM - 6:00 PM<br />
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Online Shelf: Open 24/7</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SocialShelf. Built with React & Pure CSS. Open source community initiative.</p>
        </div>
      </div>
    </footer>
  );
}
