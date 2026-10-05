import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

export default function Navbar() {
  const { rentals, currentUser, logout, isAdmin } = useLibrary();

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
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Events
              </NavLink>
            </li>
            {isAdmin && (
              <li>
                <NavLink to="/admin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  👑 Admin Hub
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* User Session / Actions */}
        <div className="nav-actions">
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                  {currentUser.name}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>
                  {currentUser.badge}
                </span>
              </div>
              <button 
                onClick={logout} 
                className="btn btn-secondary btn-sm"
                title="Sign out of current account"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.775rem' }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                🔑 Sign In
              </Link>
              <Link to="/donate" className="btn btn-primary btn-sm">
                ❤️ Donate
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
