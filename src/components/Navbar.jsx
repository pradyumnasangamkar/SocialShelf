import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

export default function Navbar() {
  const { rentals } = useLibrary();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Brand */}
        <Link to="/" className="nav-brand">
          <span className="nav-brand-icon">📖</span>
          <span>Social<span style={{ color: 'var(--primary)' }}>Shelf</span></span>
        </Link>

        {/* Desktop Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Explore Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/rent" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Rent & Borrow
                {rentals.length > 0 && <span className="rentals-badge">{rentals.length}</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/donate" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Donate Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/volunteer" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <Link to="/donate" className="btn btn-primary btn-sm">
            ❤️ Donate a Book
          </Link>
        </div>
      </div>
    </header>
  );
}
