# 📖 SocialShelf – Community Book Sharing, Rental & Library Platform

> A modern, responsive community library web application built with **React 18**, **JavaScript (ES6+)**, and **Pure CSS**. Readers can explore curated books, borrow books with zero deposit, donate pre-loved books, and RSVP for local literary events.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Design_System-1572B6?logo=css3)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-d97706?style=for-the-badge&logoColor=white)](https://pradyumnasangamkar.github.io/SocialShelf/)

🔗 **Live Website:** [https://pradyumnasangamkar.github.io/SocialShelf/](https://pradyumnasangamkar.github.io/SocialShelf/)

---

## 📌 Project Overview

**SocialShelf** is a decentralized, community-driven digital library designed to make books accessible to everyone without high costs or rigid subscription walls.

### 🌟 Key Features:
1. **📚 Explore Book Catalog (`/books`)**:
   - Filter by genre (Technology, Fiction, Science, Self-Help, Philosophy).
   - Real-time search across titles, authors, and keywords.
   - Comprehensive book details modal with page counts, ISBN, and stock levels.
2. **🔄 Rent & Borrow Management (`/rent`)**:
   - Zero-security-deposit borrowing model.
   - Active rentals tracker with due date countdown badges.
   - 1-click rental renewal (+7 days) and instant book return actions.
3. **❤️ Community Book Donations (`/donate`)**:
   - Interactive donation form with book condition and pickup hub selection.
   - Live Community Donors Wall recognizing readers who contribute books.
4. **🎟️ Literary Events & Book Clubs (`/events`)**:
   - Upcoming author meets, reading circles, and workshops.
   - Instant RSVP registration toggle with live attendee counter.
5. **🤝 Volunteer Portal (`/volunteer`)**:
   - Community roles (Community Librarian, Reading Circle Host, Book Courier, Digital Curator).
   - Direct online volunteer sign-up form.
6. **📍 Neighborhood Hubs & FAQ (`/contact`)**:
   - Physical hub locations in major cities (Pune, Bangalore, Mumbai).
   - Interactive FAQ accordion for library guidelines.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 18 | Component-based interactive UI |
| **Build Tool & Bundler** | Vite 5 | Lightning-fast development & optimized production build |
| **Routing** | React Router v6 (`HashRouter`) | Seamless client-side navigation without 404s on static hosting |
| **State Management** | React Context API + LocalStorage | Reactive global library state (books, rentals, events, donations) |
| **Styling** | Pure CSS3 (Custom Properties) | Custom literary aesthetic, typography, and responsive grid layouts |
| **CI / CD Deployment** | GitHub Actions | Automated build and deployment to GitHub Pages |

---

## 🚀 Running the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/pradyumnasangamkar/SocialShelf.git
cd SocialShelf
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 👨‍💻 Developer & Portfolio Use

Built by **Pradyumna Sangamkar** to demonstrate clean, maintainable frontend architecture, responsive UI design, and automated CI/CD deployment.
