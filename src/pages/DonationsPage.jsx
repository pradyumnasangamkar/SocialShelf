import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';

export default function DonationsPage() {
  const { donations, donateBook } = useLibrary();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: 'Fiction',
    condition: 'Gently Used',
    donorName: '',
    pages: '',
    description: '',
    dropoffLocation: 'Central Hub - Pune'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;

    donateBook(formData);
    setSubmitted(true);
    setFormData({
      title: '',
      author: '',
      genre: 'Fiction',
      condition: 'Gently Used',
      donorName: '',
      pages: '',
      description: '',
      dropoffLocation: 'Central Hub - Pune'
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Give the Gift of Reading</span>
          <h1 className="section-title">Donate Books to the Community</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0.5rem auto 0' }}>
            Have books resting on your shelf that deserve another reader? Donate them to SocialShelf and track their positive impact across local readers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Donation Form */}
          <div className="form-card" style={{ margin: 0, maxWidth: '100%' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              📖 Book Donation Form
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill in the book details below. It will be immediately cataloged into our community library!
            </p>

            {submitted && (
              <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                🎉 Thank you for your donation! Your book has been registered and added to our catalog.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Book Title *</label>
                <input 
                  type="text" 
                  name="title" 
                  className="form-control" 
                  placeholder="e.g. Clean Code / The Alchemist" 
                  value={formData.title} 
                  onChange={handleChange}
                  required 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Author Name *</label>
                  <input 
                    type="text" 
                    name="author" 
                    className="form-control" 
                    placeholder="e.g. Robert C. Martin" 
                    value={formData.author} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Genre</label>
                  <select name="genre" className="form-control" value={formData.genre} onChange={handleChange}>
                    <option value="Fiction">Fiction</option>
                    <option value="Technology">Technology</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Science">Science</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Academic">Academic</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Condition</label>
                  <select name="condition" className="form-control" value={formData.condition} onChange={handleChange}>
                    <option value="Like New">Like New</option>
                    <option value="Gently Used">Gently Used</option>
                    <option value="Well Read">Well Read</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Approx. Pages</label>
                  <input 
                    type="number" 
                    name="pages" 
                    className="form-control" 
                    placeholder="e.g. 350" 
                    value={formData.pages} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Name (for Donor Credits)</label>
                <input 
                  type="text" 
                  name="donorName" 
                  className="form-control" 
                  placeholder="e.g. Priya Sharma (or Anonymous)" 
                  value={formData.donorName} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Drop-off / Pickup Hub</label>
                <select name="dropoffLocation" className="form-control" value={formData.dropoffLocation} onChange={handleChange}>
                  <option value="Central Hub - Pune">Central Hub - Pune</option>
                  <option value="Tech Park Shelf - Bangalore">Tech Park Shelf - Bangalore</option>
                  <option value="Community Library - Mumbai">Community Library - Mumbai</option>
                  <option value="Courier Delivery">Send via Speed Post / Courier</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', marginTop: '0.5rem' }}>
                ❤️ Submit Book Donation
              </button>
            </form>
          </div>

          {/* Donation History / Recognition */}
          <div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                🌟 Community Donors Wall
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Every book added fuels our mission of open learning. Here are recent contributions from our community heroes:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {donations.map(d => (
                  <div 
                    key={d.id} 
                    style={{ 
                      padding: '1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'var(--bg-base)', 
                      border: '1px solid var(--border)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem' }}>{d.title}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        by {d.author} · Donated by <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{d.donor}</span>
                      </span>
                    </div>
                    <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>
                      ✓ {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--primary-light)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
              <h4 style={{ color: 'var(--primary-hover)', fontWeight: 700, marginBottom: '0.5rem' }}>
                📦 What Books Can You Donate?
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                We happily accept textbooks, programming guides, fiction, biographies, children's books, and competitive exam materials in readable condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
