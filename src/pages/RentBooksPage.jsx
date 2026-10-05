import React from 'react';
import { Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

export default function RentBooksPage() {
  const { rentals, returnBook, renewBook } = useLibrary();

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Borrowing Hub</span>
          <h1 className="section-title">Your Active Book Rentals</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Keep track of your borrowed books, manage return deadlines, and renew with one click.
          </p>
        </div>

        {/* Active Rentals Table */}
        {rentals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📖</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No Active Rentals</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              You haven't borrowed any books from SocialShelf yet. Explore our open library catalog to borrow your next read!
            </p>
            <Link to="/books" className="btn btn-primary">
              Browse Available Books →
            </Link>
          </div>
        ) : (
          <div className="table-card" style={{ marginBottom: '3.5rem' }}>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Rental ID</th>
                    <th>Book Details</th>
                    <th>Borrow Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rentals.map(rental => (
                    <tr key={rental.id}>
                      <td style={{ fontWeight: 700, color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                        {rental.id}
                      </td>
                      <td>
                        <strong style={{ display: 'block', fontSize: '0.95rem' }}>{rental.bookTitle}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>by {rental.author}</span>
                      </td>
                      <td style={{ color: 'var(--text-muted)' }}>{rental.borrowDate}</td>
                      <td>
                        <span style={{ fontWeight: 600 }}>{rental.dueDate}</span>
                      </td>
                      <td>
                        <span className="badge badge-success">
                          ● {rental.daysRemaining > 0 ? `${rental.daysRemaining} days left` : 'Due Today'}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                          <button 
                            onClick={() => renewBook(rental.id)} 
                            className="btn btn-secondary btn-sm"
                            title="Extend rental by 7 days"
                          >
                            🔄 Renew (+7d)
                          </button>
                          <button 
                            onClick={() => returnBook(rental.id)} 
                            className="btn btn-danger btn-sm"
                            title="Return to library shelf"
                          >
                            Return Book
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Lending Guidelines */}
        <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
            🌱 SocialShelf Community Lending Code
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                1. Zero Security Deposit
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Our model is built on mutual reader trust. There are no mandatory deposits or hidden late fees.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                2. Free Unlimited Renewals
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Need more time to finish your chapters? Renew your book anytime as long as no other member has reserved it.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                3. Gentle Handling
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Please treat every book with care. Use bookmarks rather than dog-earing pages for the next reader.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
