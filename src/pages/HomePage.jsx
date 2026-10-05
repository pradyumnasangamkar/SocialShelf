import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

export default function HomePage() {
  const { books, rentBook, events, registerEvent } = useLibrary();
  const [selectedBook, setSelectedBook] = useState(null);
  const [rentDuration, setRentDuration] = useState(14);

  const featuredBooks = books.slice(0, 4);
  const nextEvent = events[0];

  const handleRentSubmit = (e) => {
    e.preventDefault();
    if (selectedBook) {
      rentBook(selectedBook.id, rentDuration);
      setSelectedBook(null);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag">
            <span>✨</span> Community-Driven Book Sharing & Library
          </div>
          <h1 className="hero-title">
            Share Stories. Expand Minds. <br />
            <span>Connect Through Books.</span>
          </h1>
          <p className="hero-subtitle">
            SocialShelf is a decentralized community library where you can rent bestsellers for free or nominal costs, donate books you love, and attend local literary circles.
          </p>
          <div className="hero-cta">
            <Link to="/books" className="btn btn-primary">
              📚 Browse Library Shelf
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              ❤️ Donate Your Books
            </Link>
          </div>

          {/* Live Stats Ribbon */}
          <div className="stats-ribbon">
            <div className="stat-item">
              <div className="stat-number">2,450+</div>
              <div className="stat-label">Books Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,820+</div>
              <div className="stat-label">Active Readers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">890+</div>
              <div className="stat-label">Books Donated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">48+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Curated For You</span>
            <h2 className="section-title">Featured on the Shelf</h2>
          </div>

          <div className="books-grid">
            {featuredBooks.map(book => (
              <div className="book-card" key={book.id}>
                <div className="book-cover">
                  <img src={book.cover} alt={book.title} />
                  <span className="book-cover-badge">★ {book.rating}</span>
                </div>
                <div className="book-body">
                  <span className="book-genre">{book.genre}</span>
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1rem', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {book.description}
                  </p>
                  <div className="book-footer">
                    <div>
                      <span className="book-price">{book.rentalFee}</span>
                      <span className="book-price-period"> / {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedBook(book)}
                      className="btn btn-primary btn-sm"
                      disabled={book.stock <= 0}
                    >
                      {book.stock > 0 ? 'Borrow' : 'Reserved'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/books" className="btn btn-secondary">
              View All {books.length} Books in Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Simple & Accessible</span>
            <h2 className="section-title">How SocialShelf Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                step: '01',
                title: 'Discover & Borrow',
                text: 'Search our open catalog for fiction, technology, self-help, or science books. Pick your rental duration with zero deposit.'
              },
              {
                step: '02',
                title: 'Read & Exchange',
                text: 'Enjoy reading in paperback or pick up from your nearest community hub. Renew anytime with a single click.'
              },
              {
                step: '03',
                title: 'Donate & Pay Forward',
                text: 'Give your old books a second life by donating them to fellow readers and track community borrowing.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', position: 'relative' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-light)', fontFamily: 'var(--font-serif)', position: 'absolute', top: '1.25rem', right: '1.5rem' }}>
                  {item.step}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event Feature Banner */}
      {nextEvent && (
        <section className="section">
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
              color: '#fff',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 3rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}>
              <div style={{ maxWidth: '600px' }}>
                <span className="badge badge-warning" style={{ marginBottom: '1rem' }}>
                  📅 Next Upcoming Community Event
                </span>
                <h2 style={{ color: '#fff', fontSize: '2.1rem', marginBottom: '0.75rem' }}>
                  {nextEvent.title}
                </h2>
                <p style={{ color: '#d6d3d1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {nextEvent.description}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: '#a8a29e', fontSize: '0.9rem' }}>
                  <span>📍 {nextEvent.location}</span>
                  <span>⏰ {nextEvent.date} ({nextEvent.time})</span>
                  <span>👥 {nextEvent.attendees} Registered</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => registerEvent(nextEvent.id)}
                  className={`btn ${nextEvent.isRegistered ? 'btn-secondary' : 'btn-primary'}`}
                  style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}
                >
                  {nextEvent.isRegistered ? '✓ You Are Attending' : '🎟️ RSVP For Free'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reader Reviews & Testimonials */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Community Voices</span>
            <h2 className="section-title">Loved by Readers Across India</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                quote: 'SocialShelf transformed my reading habits. I was able to borrow system design and clean code books without spending thousands.',
                name: 'Aditya Kulkarni',
                role: 'Software Engineer, Pune'
              },
              {
                quote: 'Donating 15 of my college textbooks was so smooth. Knowing students are using them today brings immense satisfaction.',
                name: 'Dr. Meera Nambiar',
                role: 'Professor, Bangalore'
              },
              {
                quote: 'The weekend reading circles are the highlight of my month. Great conversations and lifelong bookworm friends.',
                name: 'Tanvi Shinde',
                role: 'Content Creator, Mumbai'
              }
            ].map((t, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  "{t.quote}"
                </p>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--primary)', fontWeight: 600 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Rent Modal */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBook(null)}>✕</button>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Borrow Book</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Confirm your rental details for <strong>{selectedBook.title}</strong> by {selectedBook.author}.
            </p>

            <form onSubmit={handleRentSubmit}>
              <div className="form-group">
                <label className="form-label">Rental Duration</label>
                <select 
                  className="form-control" 
                  value={rentDuration} 
                  onChange={e => setRentDuration(Number(e.target.value))}
                >
                  <option value={7}>7 Days (1 Week)</option>
                  <option value={14}>14 Days (2 Weeks) - Recommended</option>
                  <option value={30}>30 Days (1 Month)</option>
                </select>
              </div>

              <div style={{ background: 'var(--bg-base)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Rental Fee:</span>
                  <strong>{selectedBook.rentalFee}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Security Deposit:</span>
                  <strong style={{ color: 'var(--success)' }}>₹0 (Community Trust)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Pickup Center:</span>
                  <span>Central Hub / Digital Dispatch</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Confirm & Borrow Book
                </button>
                <button type="button" onClick={() => setSelectedBook(null)} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
