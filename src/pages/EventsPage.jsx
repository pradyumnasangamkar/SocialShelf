import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';

export default function EventsPage() {
  const { events, registerEvent } = useLibrary();
  const [filterCat, setFilterCat] = useState('All');

  const categories = ['All', 'Book Club', 'Author Meet', 'Workshop'];

  const filteredEvents = events.filter(e => filterCat === 'All' || e.category === filterCat);

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Gather & Read Together</span>
          <h1 className="section-title">Community Literary Events</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Meet fellow readers, exchange favorite stories, and attend author interactions and book discussions.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`genre-pill ${filterCat === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-warning">{event.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    👥 {event.attendees} Attending
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', lineHeight: 1.3, marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
                  {event.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {event.description}
                </p>

                <div style={{ background: 'var(--bg-base)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)', fontSize: '0.875rem' }}>
                  <div style={{ marginBottom: '0.35rem' }}>📅 <strong>Date:</strong> {event.date}</div>
                  <div style={{ marginBottom: '0.35rem' }}>⏰ <strong>Time:</strong> {event.time}</div>
                  <div>📍 <strong>Venue:</strong> {event.location}</div>
                </div>
              </div>

              <button
                onClick={() => registerEvent(event.id)}
                className={`btn ${event.isRegistered ? 'btn-secondary' : 'btn-primary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {event.isRegistered ? '✓ You Are Registered' : '🎟️ RSVP For Event'}
              </button>
            </div>
          ))}
        </div>

        {/* Propose an Event CTA */}
        <div style={{ background: 'var(--bg-surface)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
            💡 Want to Host a Book Reading or Workshop?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: '540px', margin: '0 auto 1.5rem', fontSize: '0.925rem' }}>
            We provide venue support, community publicity, and library materials for passionate book lovers. Reach out to our community team to get started!
          </p>
          <a href="#/contact" className="btn btn-primary">
            Host a Community Event →
          </a>
        </div>
      </div>
    </div>
  );
}
