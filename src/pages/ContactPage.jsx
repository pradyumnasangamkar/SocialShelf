import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';

export default function ContactPage() {
  const { showToast } = useLibrary();

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How does book borrowing work on SocialShelf?',
      a: 'Browse our online catalog, select any available book, choose your rental duration (7, 14, or 30 days), and click Borrow. You can collect it from the nearest community shelf or arrange peer pickup with zero security deposit.'
    },
    {
      q: 'Is renting books really free?',
      a: 'Most community-contributed books are 100% free to borrow! Specialized technical handbooks or rare editions may have a nominal maintenance fee (e.g. ₹15 - ₹30/week) which directly supports hub maintenance.'
    },
    {
      q: 'How do book donations work?',
      a: 'Simply visit our "Donate Books" page, enter the book details, and drop it off at any of our partner hubs or courier it. The book is logged into our open catalog with your donor credits!'
    },
    {
      q: 'What if I need more time to finish reading?',
      a: 'You can extend any active rental by 7 days directly from the "Rent & Borrow" page with one click, as long as another reader hasn’t reserved it.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('✉️ Message sent successfully! We will get back to you shortly.');
    setSubmitted(true);
    setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h1 className="section-title">We'd Love to Hear From You</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Have a question about book borrowing, drop-off locations, or starting a reading hub in your area? Contact our team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', marginBottom: '4rem', alignItems: 'start' }}>
          {/* Contact Form */}
          <div className="form-card" style={{ margin: 0, maxWidth: '100%' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              Send Us a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              We usually respond within a few hours.
            </p>

            {submitted && (
              <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                ✅ Your message has been sent. Thank you for reaching out!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="e.g. Ananya Sen"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="ananya@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select 
                  className="form-control"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Book Donation Query">Book Donation Query</option>
                  <option value="Host a Book Club">Host a Book Club</option>
                  <option value="Start a Neighborhood Shelf">Start a Neighborhood Shelf</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                ✉️ Send Message
              </button>
            </form>
          </div>

          {/* Hub Locations & FAQ */}
          <div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                📍 Community Drop-Off Hubs
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <strong style={{ fontSize: '0.95rem' }}>Central Community Shelf - Pune</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>FC Road, Deccan Gymkhana, Pune, Maharashtra 411004</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Open Mon-Sat: 10am - 8pm</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>Tech Park Reading Corner - Bangalore</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Electronic City Phase 1, Bangalore, Karnataka 560100</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Open 24/7 (Access Badge Required)</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>Public Library Partner Hub - Mumbai</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bandra West, Mumbai, Maharashtra 400050</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Open Tue-Sun: 11am - 7pm</span>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                ❓ Frequently Asked Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      background: 'var(--bg-card)', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid var(--border)',
                      overflow: 'hidden'
                    }}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '0.925rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: openFaq === idx ? 'var(--primary)' : 'var(--text-main)'
                      }}
                    >
                      <span>{faq.q}</span>
                      <span>{openFaq === idx ? '−' : '+'}</span>
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
