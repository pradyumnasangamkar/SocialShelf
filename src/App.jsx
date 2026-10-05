import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import RentBooksPage from './pages/RentBooksPage';
import DonationsPage from './pages/DonationsPage';
import EventsPage from './pages/EventsPage';
import VolunteersPage from './pages/VolunteersPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <LibraryProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/rent" element={<RentBooksPage />} />
          <Route path="/donate" element={<DonationsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/volunteer" element={<VolunteersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </LibraryProvider>
    </Router>
  );
}
