import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';

export default function VolunteersPage() {
  const { showToast } = useLibrary();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    rolePreference: 'Community Librarian',
    availability: 'Weekends (3-4 hrs)',
    motivation: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`🌟 Welcome aboard, ${form.fullName}! Your volunteer application was received.`);
    setSubmitted(true);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      rolePreference: 'Community Librarian',
      availability: 'Weekends (3-4 hrs)',
      motivation: ''
    });
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Join the Movement</span>
          <h1 className="section-title">Volunteer with SocialShelf</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0.5rem auto 0' }}>
            Help us make books accessible to everyone in your neighborhood. Whether you have 2 hours a week or a whole weekend, your help makes a difference.
          </p>
        </div>

        {/* Roles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            {
              icon: '📚',
              title: 'Community Librarian',
              desc: 'Help manage local book drop-off shelves, verify book conditions, and log new community donations.'
            },
            {
              icon: '🎙️',
              title: 'Reading Circle Host',
              desc: 'Lead monthly weekend discussions, moderate book reviews, and introduce new authors to readers.'
            },
            {
              icon: '🚲',
              title: 'Book Courier / Sherpa',
              desc: 'Deliver borrowed books to senior readers, students, or neighborhood pick-up shelves.'
            },
            {
              icon: '💻',
              title: 'Digital Curator',
              desc: 'Help write book summaries, review community submissions, and curate reading lists for youth.'
            }
          ].map((role, idx) => (
            <div key={idx} style={{ background: 'var(--bg-card)', padding: '2rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{role.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{role.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Volunteer Application Form */}
        <div className="form-card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
            🤝 Volunteer Sign-up Form
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
            Tell us a bit about yourself and we will connect you to the nearest neighborhood reading hub.
          </p>

          {submitted && (
            <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              ✅ Thank you for volunteering! Our community coordinator will reach out to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="e.g. Rahul Sharma"
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
                required 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="rahul@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="+91-9876543210"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Role Preference</label>
                <select 
                  className="form-control"
                  value={form.rolePreference}
                  onChange={e => setForm({ ...form, rolePreference: e.target.value })}
                >
                  <option value="Community Librarian">Community Librarian</option>
                  <option value="Reading Circle Host">Reading Circle Host</option>
                  <option value="Book Courier / Sherpa">Book Courier / Sherpa</option>
                  <option value="Digital Curator">Digital Curator</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Availability</label>
                <select 
                  className="form-control"
                  value={form.availability}
                  onChange={e => setForm({ ...form, availability: e.target.value })}
                >
                  <option value="Weekends (3-4 hrs)">Weekends (3-4 hrs)</option>
                  <option value="Weekday Evenings (2 hrs)">Weekday Evenings (2 hrs)</option>
                  <option value="Flexible / As Needed">Flexible / As Needed</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Why do you want to join SocialShelf?</label>
              <textarea 
                className="form-control" 
                rows="3"
                placeholder="Share your favorite genres, community passions, or reading goals..."
                value={form.motivation}
                onChange={e => setForm({ ...form, motivation: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              🚀 Join as Community Volunteer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
