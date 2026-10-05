import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';

export default function BooksPage() {
  const { books, rentBook } = useLibrary();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [activeModalBook, setActiveModalBook] = useState(null);
  const [rentDays, setRentDays] = useState(14);

  const genres = ['All', 'Technology', 'Fiction', 'Self-Help', 'Science', 'Philosophy'];

  const filteredBooks = books.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || b.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handleRent = (e) => {
    e.preventDefault();
    if (activeModalBook) {
      rentBook(activeModalBook.id, rentDays);
      setActiveModalBook(null);
    }
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Community Collection</span>
          <h1 className="section-title">Explore the Library Shelf</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Discover and borrow books shared by our community members. Search by title, author, or browse your favorite genres.
          </p>
        </div>

        {/* Catalog Filter Toolbar */}
        <div className="catalog-toolbar">
          <div className="search-input-box">
            <span>🔍</span>
            <input 
              type="text" 
              placeholder="Search books by title, author, or topic..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            )}
          </div>

          <div className="genre-pills">
            {genres.map(g => (
              <button 
                key={g} 
                onClick={() => setSelectedGenre(g)} 
                className={`genre-pill ${selectedGenre === g ? 'active' : ''}`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Showing {filteredBooks.length} of {books.length} books
          </span>
          {selectedGenre !== 'All' && (
            <button 
              onClick={() => setSelectedGenre('All')} 
              style={{ fontSize: '0.825rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
            >
              Clear Genre Filter
            </button>
          )}
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>No Books Found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We couldn't find any books matching your search. Try different keywords or clear the filter.
            </p>
            <button onClick={() => { setSearchTerm(''); setSelectedGenre('All'); }} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
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
                      <span className="book-price-period"> / {book.stock > 0 ? `${book.stock} left` : 'Out of stock'}</span>
                    </div>
                    <button 
                      onClick={() => setActiveModalBook(book)}
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
        )}

        {/* Rent Modal */}
        {activeModalBook && (
          <div className="modal-overlay" onClick={() => setActiveModalBook(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveModalBook(null)}>✕</button>
              
              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <img 
                  src={activeModalBook.cover} 
                  alt={activeModalBook.title} 
                  style={{ width: '90px', height: '125px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} 
                />
                <div>
                  <span className="badge badge-info" style={{ marginBottom: '0.35rem' }}>{activeModalBook.genre}</span>
                  <h3 style={{ fontSize: '1.25rem', lineHeight: 1.3 }}>{activeModalBook.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>by {activeModalBook.author}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>
                    {activeModalBook.pages} pages · ISBN: {activeModalBook.isbn}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {activeModalBook.description}
              </p>

              <form onSubmit={handleRent}>
                <div className="form-group">
                  <label className="form-label">Select Rental Duration</label>
                  <select 
                    className="form-control" 
                    value={rentDays} 
                    onChange={e => setRentDays(Number(e.target.value))}
                  >
                    <option value={7}>7 Days (1 Week)</option>
                    <option value={14}>14 Days (2 Weeks) - Standard</option>
                    <option value={30}>30 Days (1 Month)</option>
                  </select>
                </div>

                <div style={{ background: 'var(--bg-base)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.875rem' }}>
                    <span>Rental Rate:</span>
                    <strong>{activeModalBook.rentalFee}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.875rem' }}>
                    <span>Security Deposit:</span>
                    <strong style={{ color: 'var(--success)' }}>₹0 (Free Community Lending)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span>Estimated Due Date:</span>
                    <strong>{new Date(Date.now() + rentDays * 86400000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Confirm & Borrow
                  </button>
                  <button type="button" onClick={() => setActiveModalBook(null)} className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
