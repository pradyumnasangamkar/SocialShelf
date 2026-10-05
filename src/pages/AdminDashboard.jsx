import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { users, currentUser, books, rentals, donations, deleteUser, addBook, deleteBook, isAdmin } = useLibrary();

  const [activeTab, setActiveTab] = useState('users');
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: 'Technology',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    stock: 5,
    pages: 350,
    rentalFee: 'Free',
    description: ''
  });

  const handleCreateBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;
    addBook(newBook);
    setShowAddBookModal(false);
    setNewBook({
      title: '',
      author: '',
      genre: 'Technology',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
      stock: 5,
      pages: 350,
      rentalFee: 'Free',
      description: ''
    });
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-subtitle">Administration & Database</span>
            <h1 className="section-title">Librarian Management Hub</h1>
            <p style={{ color: 'var(--text-muted)' }}>
              Monitor registered library members, manage book stock, and oversee donations.
            </p>
          </div>

          <button onClick={() => setShowAddBookModal(true)} className="btn btn-primary">
            + Add New Book to Catalog
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Registered Members</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
              {users.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>Active in database</span>
          </div>

          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Catalog Titles</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
              {books.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across 6 genres</span>
          </div>

          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Active Borrowed Books</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
              {rentals.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>Currently with readers</span>
          </div>

          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Books Donated</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
              {donations.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>100% community powered</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('users')}
            className={`genre-pill ${activeTab === 'users' ? 'active' : ''}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
          >
            👥 User Database ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('books')}
            className={`genre-pill ${activeTab === 'books' ? 'active' : ''}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
          >
            📚 Inventory Catalog ({books.length})
          </button>
          <button
            onClick={() => setActiveTab('rentals')}
            className={`genre-pill ${activeTab === 'rentals' ? 'active' : ''}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
          >
            🔄 Active Rentals ({rentals.length})
          </button>
          <button
            onClick={() => setActiveTab('donations')}
            className={`genre-pill ${activeTab === 'donations' ? 'active' : ''}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
          >
            ❤️ Donations Log ({donations.length})
          </button>
        </div>

        {/* TAB 1: USERS DATABASE */}
        {activeTab === 'users' && (
          <div className="table-card">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Member Details</th>
                    <th>Email Address</th>
                    <th>Role</th>
                    <th>Joined Date</th>
                    <th>Activity</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id}>
                      <td style={{ fontWeight: 700, color: 'var(--text-muted)' }}>USR-00{u.id}</td>
                      <td>
                        <strong>{u.name}</strong>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary)' }}>
                          {u.badge}
                        </span>
                      </td>
                      <td style={{ color: 'var(--text-muted)' }}>{u.email}</td>
                      <td>
                        <span className={`badge ${u.role === 'ADMIN' ? 'badge-warning' : (u.role === 'VOLUNTEER' ? 'badge-info' : 'badge-success')}`}>
                          {u.role}
                        </span>
                      </td>
                      <td style={{ color: 'var(--text-muted)' }}>{u.joinedDate}</td>
                      <td>
                        <span style={{ fontSize: '0.8rem' }}>
                          📖 {u.borrowedCount || 0} rented · ❤️ {u.donatedCount || 0} donated
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {u.id !== currentUser?.id ? (
                          <button
                            onClick={() => deleteUser(u.id)}
                            className="btn btn-danger btn-sm"
                            title="Delete user from database"
                          >
                            Remove
                          </button>
                        ) : (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active (You)</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKS INVENTORY */}
        {activeTab === 'books' && (
          <div className="table-card">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Cover</th>
                    <th>Title & Author</th>
                    <th>Genre</th>
                    <th>Rental Fee</th>
                    <th>Stock Available</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map(b => (
                    <tr key={b.id}>
                      <td>
                        <img 
                          src={b.cover} 
                          alt={b.title} 
                          style={{ width: '40px', height: '55px', objectFit: 'cover', borderRadius: '4px' }} 
                        />
                      </td>
                      <td>
                        <strong>{b.title}</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          by {b.author} · {b.pages} pages
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-info">{b.genre}</span>
                      </td>
                      <td><strong>{b.rentalFee}</strong></td>
                      <td>
                        <span className={`badge ${b.stock > 0 ? 'badge-success' : 'badge-danger'}`}>
                          {b.stock} copies
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => deleteBook(b.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ACTIVE RENTALS */}
        {activeTab === 'rentals' && (
          <div className="table-card">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Rental ID</th>
                    <th>Book</th>
                    <th>Borrower</th>
                    <th>Borrowed Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rentals.map(r => (
                    <tr key={r.id}>
                      <td style={{ fontWeight: 700 }}>{r.id}</td>
                      <td>
                        <strong>{r.bookTitle}</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>by {r.author}</span>
                      </td>
                      <td><strong>{r.borrowerName || 'Community Member'}</strong></td>
                      <td>{r.borrowDate}</td>
                      <td>{r.dueDate}</td>
                      <td>
                        <span className="badge badge-success">
                          ● Active ({r.daysRemaining}d left)
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: DONATIONS */}
        {activeTab === 'donations' && (
          <div className="table-card">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Donation ID</th>
                    <th>Book Contributed</th>
                    <th>Donor Name</th>
                    <th>Date Received</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map(d => (
                    <tr key={d.id}>
                      <td style={{ fontWeight: 700 }}>DON-00{d.id}</td>
                      <td>
                        <strong>{d.title}</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>by {d.author}</span>
                      </td>
                      <td><span style={{ color: 'var(--primary)', fontWeight: 600 }}>{d.donor}</span></td>
                      <td>{d.date}</td>
                      <td>
                        <span className="badge badge-success">✓ {d.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Book Modal */}
        {showAddBookModal && (
          <div className="modal-overlay" onClick={() => setShowAddBookModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowAddBookModal(false)}>✕</button>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                Add Book to Library Inventory
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Fill in the details below to add a new title to the community shelves.
              </p>

              <form onSubmit={handleCreateBook}>
                <div className="form-group">
                  <label className="form-label">Book Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. System Design Interview"
                    value={newBook.title}
                    onChange={e => setNewBook({ ...newBook, title: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Author Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Alex Xu"
                      value={newBook.author}
                      onChange={e => setNewBook({ ...newBook, author: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Genre</label>
                    <select
                      className="form-control"
                      value={newBook.genre}
                      onChange={e => setNewBook({ ...newBook, genre: e.target.value })}
                    >
                      <option value="Technology">Technology</option>
                      <option value="Fiction">Fiction</option>
                      <option value="Self-Help">Self-Help</option>
                      <option value="Science">Science</option>
                      <option value="Philosophy">Philosophy</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Initial Copies (Stock)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newBook.stock}
                      onChange={e => setNewBook({ ...newBook, stock: Number(e.target.value) })}
                      min="1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rental Rate</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newBook.rentalFee}
                      onChange={e => setNewBook({ ...newBook, rentalFee: e.target.value })}
                      placeholder="e.g. Free or ₹20/wk"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Brief synopsis..."
                    value={newBook.description}
                    onChange={e => setNewBook({ ...newBook, description: e.target.value })}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    + Save to Inventory
                  </button>
                  <button type="button" onClick={() => setShowAddBookModal(false)} className="btn btn-secondary">
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
