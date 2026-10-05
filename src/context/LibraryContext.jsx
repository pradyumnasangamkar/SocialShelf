import React, { createContext, useContext, useState, useEffect } from 'react';

const LibraryContext = createContext(null);

const INITIAL_USERS = [
  {
    id: 1,
    name: 'Siddharth Rao',
    email: 'admin@socialshelf.org',
    password: 'password123',
    role: 'ADMIN',
    badge: '👑 Head Librarian',
    joinedDate: '2025-01-15',
    borrowedCount: 18,
    donatedCount: 12
  },
  {
    id: 2,
    name: 'Pooja Kulkarni',
    email: 'reader@socialshelf.org',
    password: 'password123',
    role: 'READER',
    badge: '📖 Avid Reader',
    joinedDate: '2025-04-20',
    borrowedCount: 6,
    donatedCount: 3
  },
  {
    id: 3,
    name: 'Karan Malhotra',
    email: 'volunteer@socialshelf.org',
    password: 'password123',
    role: 'VOLUNTEER',
    badge: '🤝 Community Host',
    joinedDate: '2025-06-10',
    borrowedCount: 4,
    donatedCount: 5
  },
  {
    id: 4,
    name: 'Arjun Deshmukh',
    email: 'arjun@socialshelf.org',
    password: 'password123',
    role: 'READER',
    badge: '📚 Student Member',
    joinedDate: '2025-08-01',
    borrowedCount: 2,
    donatedCount: 1
  }
];

const INITIAL_BOOKS = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    description: 'An easy and proven way to build good habits and break bad ones. Practical strategies that teach you how to form good habits and break bad ones.',
    stock: 5,
    pages: 320,
    rentalFee: 'Free',
    rating: 4.9,
    isbn: '978-0735211292'
  },
  {
    id: 2,
    title: 'Clean Code: Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    genre: 'Technology',
    cover: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=600',
    description: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Master clean craftsmanship principles.',
    stock: 3,
    pages: 464,
    rentalFee: '₹20/wk',
    rating: 4.8,
    isbn: '978-0132350884'
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600',
    description: 'A masterpiece of American literature exploring human nature, compassion, and courage in the face of prejudice and injustice.',
    stock: 4,
    pages: 336,
    rentalFee: 'Free',
    rating: 4.9,
    isbn: '978-0060935467'
  },
  {
    id: 4,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    description: 'A landmark volume in science writing by one of the great minds of our time, exploring the origins, nature, and fate of the universe.',
    stock: 2,
    pages: 256,
    rentalFee: '₹15/wk',
    rating: 4.7,
    isbn: '978-0553380163'
  },
  {
    id: 5,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Self-Help',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave.',
    stock: 6,
    pages: 252,
    rentalFee: 'Free',
    rating: 4.8,
    isbn: '978-0857197689'
  },
  {
    id: 6,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    genre: 'Technology',
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    description: 'The definitive guide to distributed data systems, databases, streams, and batch processing for modern backend software developers.',
    stock: 2,
    pages: 616,
    rentalFee: '₹30/wk',
    rating: 4.9,
    isbn: '978-1449373320'
  },
  {
    id: 7,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'Philosophy',
    cover: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=600',
    description: '100,000 years ago, at least six human species inhabited the earth. Today there is just one. How did our species succeed in the battle for dominance?',
    stock: 3,
    pages: 464,
    rentalFee: '₹15/wk',
    rating: 4.8,
    isbn: '978-0062316097'
  },
  {
    id: 8,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600',
    description: 'The story of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan in the Roaring Twenties.',
    stock: 4,
    pages: 180,
    rentalFee: 'Free',
    rating: 4.6,
    isbn: '978-0743273565'
  }
];

const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'Weekend Reading Circle & Book Exchange',
    date: 'Saturday, Oct 18, 2026',
    time: '10:30 AM - 1:00 PM',
    location: 'Central Community Hall, Pune',
    category: 'Book Club',
    attendees: 38,
    description: 'Bring a favorite book, share insights with fellow bibliophiles, and exchange pre-loved books over artisan tea.',
    isRegistered: false
  },
  {
    id: 2,
    title: 'Author Spotlight: Modern Fiction & Storycrafting',
    date: 'Sunday, Nov 2, 2026',
    time: '4:00 PM - 6:30 PM',
    location: 'Online Webinar (Google Meet)',
    category: 'Author Meet',
    attendees: 124,
    description: 'An interactive Q&A session with celebrated indie authors on finding inspiration and crafting compelling narratives.',
    isRegistered: false
  },
  {
    id: 3,
    title: 'Youth Literacy & Storytelling Workshop',
    date: 'Saturday, Nov 15, 2026',
    time: '11:00 AM - 2:00 PM',
    location: 'SocialShelf Library Hub, Bangalore',
    category: 'Workshop',
    attendees: 52,
    description: 'Volunteer-led interactive storytelling and creative writing games for high school and university students.',
    isRegistered: true
  }
];

const INITIAL_RENTALS = [
  {
    id: 'RNT-101',
    bookTitle: 'Atomic Habits',
    author: 'James Clear',
    borrowDate: '2026-09-28',
    dueDate: '2026-10-12',
    status: 'ACTIVE',
    daysRemaining: 7,
    fee: 'Free',
    borrowerName: 'Pooja Kulkarni'
  },
  {
    id: 'RNT-102',
    bookTitle: 'Clean Code: Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    borrowDate: '2026-09-20',
    dueDate: '2026-10-18',
    status: 'ACTIVE',
    daysRemaining: 13,
    fee: '₹20/wk',
    borrowerName: 'Arjun Deshmukh'
  }
];

export function LibraryProvider({ children }) {
  // Database Collections
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('socialshelf_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('socialshelf_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('socialshelf_books');
    return saved ? JSON.parse(saved) : INITIAL_BOOKS;
  });

  const [rentals, setRentals] = useState(() => {
    const saved = localStorage.getItem('socialshelf_rentals');
    return saved ? JSON.parse(saved) : INITIAL_RENTALS;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('socialshelf_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('socialshelf_donations');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'The Pragmatic Programmer', author: 'Andy Hunt', donor: 'Pooja Kulkarni', date: '2026-09-30', status: 'VERIFIED' },
      { id: 2, title: 'Deep Work', author: 'Cal Newport', donor: 'Rohan Mehta', date: '2026-10-02', status: 'ACCEPTED' },
      { id: 3, title: 'Zero to One', author: 'Peter Thiel', donor: 'Sneha Patil', date: '2026-10-04', status: 'IN_TRANSIT' }
    ];
  });

  const [toastMsg, setToastMsg] = useState(null);

  // Sync to Database (LocalStorage)
  useEffect(() => {
    localStorage.setItem('socialshelf_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('socialshelf_auth', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('socialshelf_auth');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('socialshelf_books', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem('socialshelf_rentals', JSON.stringify(rentals));
  }, [rentals]);

  useEffect(() => {
    localStorage.setItem('socialshelf_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('socialshelf_donations', JSON.stringify(donations));
  }, [donations]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // --- Authentication Methods ---

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const user = users.find(u => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
      throw new Error('User not found. Please register first or check your email.');
    }
    if (user.password !== password) {
      throw new Error('Invalid password. For demo accounts, use password123.');
    }

    setCurrentUser(user);
    showToast(`👋 Welcome back, ${user.name}! Logged in as ${user.badge}.`);
    return user;
  };

  const demoLogin = (role) => {
    const targetUser = users.find(u => u.role === role) || users[0];
    setCurrentUser(targetUser);
    showToast(`⚡ Switched session to ${targetUser.name} (${targetUser.badge})`);
    return targetUser;
  };

  const register = (userData) => {
    const normalizedEmail = userData.email.trim().toLowerCase();
    const existing = users.find(u => u.email.toLowerCase() === normalizedEmail);
    if (existing) {
      throw new Error('An account with this email address already exists!');
    }

    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: normalizedEmail,
      password: userData.password,
      role: userData.role || 'READER',
      badge: userData.role === 'ADMIN' ? '👑 Head Librarian' : (userData.role === 'VOLUNTEER' ? '🤝 Community Host' : '📖 Member Reader'),
      joinedDate: new Date().toISOString().split('T')[0],
      borrowedCount: 0,
      donatedCount: 0
    };

    setUsers(prev => [newUser, ...prev]);
    setCurrentUser(newUser);
    showToast(`🎉 Welcome to SocialShelf, ${newUser.name}! Your account has been registered.`);
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('🔒 You have been logged out.');
  };

  // --- Admin User Database Management ---

  const deleteUser = (userId) => {
    if (currentUser?.id === userId) {
      showToast('⚠️ You cannot delete your own active admin account!');
      return;
    }
    setUsers(prev => prev.filter(u => u.id !== userId));
    showToast('🗑️ User removed from library database.');
  };

  // --- Book Operations ---

  const rentBook = (bookId, durationDays = 14) => {
    const book = books.find(b => b.id === bookId);
    if (!book || book.stock <= 0) {
      showToast('⚠️ Sorry, this book is currently out of stock!');
      return false;
    }

    // Deduct stock
    setBooks(prev => prev.map(b => b.id === bookId ? { ...b, stock: b.stock - 1 } : b));

    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(now.getDate() + Number(durationDays));

    const borrower = currentUser ? currentUser.name : 'Guest Member';

    const newRental = {
      id: `RNT-${Math.floor(100 + Math.random() * 900)}`,
      bookTitle: book.title,
      author: book.author,
      borrowDate: now.toISOString().split('T')[0],
      dueDate: dueDate.toISOString().split('T')[0],
      status: 'ACTIVE',
      daysRemaining: durationDays,
      fee: book.rentalFee,
      borrowerName: borrower
    };

    setRentals(prev => [newRental, ...prev]);

    // Update user's count in database if logged in
    if (currentUser) {
      setUsers(prev => prev.map(u => u.id === currentUser.id ? { ...u, borrowedCount: (u.borrowedCount || 0) + 1 } : u));
    }

    showToast(`🎉 Borrowed "${book.title}" for ${durationDays} days!`);
    return true;
  };

  const returnBook = (rentalId) => {
    const rental = rentals.find(r => r.id === rentalId);
    if (!rental) return;

    setBooks(prev => prev.map(b => b.title === rental.bookTitle ? { ...b, stock: b.stock + 1 } : b));
    setRentals(prev => prev.filter(r => r.id !== rentalId));
    showToast(`✅ "${rental.bookTitle}" returned to library shelves.`);
  };

  const renewBook = (rentalId) => {
    setRentals(prev => prev.map(r => {
      if (r.id === rentalId) {
        const d = new Date(r.dueDate);
        d.setDate(d.getDate() + 7);
        return {
          ...r,
          dueDate: d.toISOString().split('T')[0],
          daysRemaining: r.daysRemaining + 7
        };
      }
      return r;
    }));
    showToast('🔄 Rental extended by 7 days!');
  };

  const donateBook = (donationData) => {
    const donor = currentUser ? currentUser.name : (donationData.donorName || 'Generous Reader');

    const newDonation = {
      id: donations.length + 1,
      title: donationData.title,
      author: donationData.author,
      donor: donor,
      date: new Date().toISOString().split('T')[0],
      status: 'VERIFIED'
    };

    setDonations(prev => [newDonation, ...prev]);

    // Add to books collection
    const newBook = {
      id: books.length + 1,
      title: donationData.title,
      author: donationData.author,
      genre: donationData.genre || 'General',
      cover: donationData.coverUrl || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
      description: donationData.description || 'Donated with love to share the joy of reading.',
      stock: 1,
      pages: Number(donationData.pages) || 280,
      rentalFee: 'Free',
      rating: 5.0,
      isbn: `978-${Math.floor(1000000000 + Math.random() * 9000000000)}`
    };

    setBooks(prev => [newBook, ...prev]);

    if (currentUser) {
      setUsers(prev => prev.map(u => u.id === currentUser.id ? { ...u, donatedCount: (u.donatedCount || 0) + 1 } : u));
    }

    showToast(`❤️ Thank you! "${donationData.title}" was added to our community shelves!`);
  };

  const addBook = (newBookData) => {
    const book = {
      ...newBookData,
      id: books.length + 1,
      rating: 4.8,
      isbn: newBookData.isbn || `978-${Math.floor(1000000000 + Math.random() * 9000000000)}`
    };
    setBooks(prev => [book, ...prev]);
    showToast(`📚 "${book.title}" added to inventory.`);
  };

  const deleteBook = (bookId) => {
    setBooks(prev => prev.filter(b => b.id !== bookId));
    showToast('🗑️ Book removed from catalog.');
  };

  const registerEvent = (eventId) => {
    setEvents(prev => prev.map(e => {
      if (e.id === eventId) {
        const nextState = !e.isRegistered;
        return {
          ...e,
          isRegistered: nextState,
          attendees: nextState ? e.attendees + 1 : e.attendees - 1
        };
      }
      return e;
    }));

    const ev = events.find(e => e.id === eventId);
    if (ev?.isRegistered) {
      showToast('Registration cancelled for event.');
    } else {
      showToast(`🎟️ RSVP Confirmed for "${ev?.title}"!`);
    }
  };

  return (
    <LibraryContext.Provider value={{
      users,
      currentUser,
      books,
      rentals,
      events,
      donations,
      login,
      demoLogin,
      register,
      logout,
      deleteUser,
      rentBook,
      returnBook,
      renewBook,
      donateBook,
      addBook,
      deleteBook,
      registerEvent,
      showToast,
      isAdmin: currentUser?.role === 'ADMIN',
      isLoggedIn: currentUser !== null
    }}>
      {children}
      {toastMsg && <div className="toast">{toastMsg}</div>}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error('useLibrary must be used within LibraryProvider');
  return ctx;
}
