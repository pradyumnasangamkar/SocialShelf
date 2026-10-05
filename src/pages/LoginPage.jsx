import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';

export default function LoginPage() {
  const { login, demoLogin, register, currentUser } = useLibrary();
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('READER');

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    try {
      login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill out all required fields.');
      return;
    }
    try {
      register({ name, email, password, role });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleQuickDemo = (demoRole) => {
    setError('');
    demoLogin(demoRole);
    if (demoRole === 'ADMIN') {
      navigate('/admin');
    } else {
      navigate('/books');
    }
  };

  return (
    <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '520px' }}>
        <div className="form-card" style={{ padding: '2.5rem 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>📖</span>
            <h1 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
              {isRegistering ? 'Create Your Account' : 'Welcome to SocialShelf'}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              {isRegistering ? 'Join our community book sharing network' : 'Sign in to access borrowed books & donation history'}
            </p>
          </div>

          {/* Quick Demo Access Bar */}
          <div style={{ background: 'var(--bg-base)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1.75rem' }}>
            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textAlign: 'center', marginBottom: '0.6rem', letterSpacing: '0.5px' }}>
              ⚡ 1-CLICK DEMO ACCESS (FOR REVIEWERS)
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
              <button 
                type="button" 
                onClick={() => handleQuickDemo('ADMIN')}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.25rem' }}
              >
                👑 Librarian
              </button>
              <button 
                type="button" 
                onClick={() => handleQuickDemo('READER')}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.25rem' }}
              >
                📖 Reader
              </button>
              <button 
                type="button" 
                onClick={() => handleQuickDemo('VOLUNTEER')}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.25rem' }}
              >
                🤝 Volunteer
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ background: 'var(--danger-bg)', color: 'var(--danger)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.875rem', fontWeight: 600 }}>
              ⚠️ {error}
            </div>
          )}

          {/* Tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem' }}>
            <button
              onClick={() => { setIsRegistering(false); setError(''); }}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'none',
                border: 'none',
                borderBottom: !isRegistering ? '2px solid var(--primary)' : '2px solid transparent',
                fontWeight: 700,
                color: !isRegistering ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => { setIsRegistering(true); setError(''); }}
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'none',
                border: 'none',
                borderBottom: isRegistering ? '2px solid var(--primary)' : '2px solid transparent',
                fontWeight: 700,
                color: isRegistering ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          {!isRegistering ? (
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="e.g. reader@socialshelf.org" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter password (demo: password123)" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                🔑 Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. Priya Sharma" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="priya@example.com" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Create Password *</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Choose a password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Account Persona / Role</label>
                <select className="form-control" value={role} onChange={e => setRole(e.target.value)}>
                  <option value="READER">📖 Reader / Student (Borrow & Donate)</option>
                  <option value="VOLUNTEER">🤝 Volunteer (Help Organize & Host)</option>
                  <option value="ADMIN">👑 Head Librarian (Manage Inventory)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                ✨ Register & Join Library
              </button>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
            <Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              ← Return to Library Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
