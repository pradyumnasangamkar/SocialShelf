# 📖 SocialShelf – Community Book Sharing, Rental & Library Platform

> A modern, responsive community library web application built with **React 18**, **JavaScript (ES6+)**, and **Pure CSS**. Readers can explore curated books, borrow books with zero deposit, donate pre-loved books, and RSVP for local literary events. Includes a full **User Authentication & Role-Based Database** system with an interactive **Admin Hub**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Design_System-1572B6?logo=css3)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-d97706?style=for-the-badge&logoColor=white)](https://pradyumnasangamkar.github.io/SocialShelf/)

🔗 **Live Website:** [https://pradyumnasangamkar.github.io/SocialShelf/](https://pradyumnasangamkar.github.io/SocialShelf/)

---

## 👥 User Roles & How to Log In

SocialShelf has **3 distinct roles** with a persistent local database and **1-Click Demo Login** support:

| Role | Demo Email | Password | Privileges & Dashboard |
|---|---|---|---|
| 👑 **ADMIN (Head Librarian)** | `admin@socialshelf.org` | `password123` | • Access the **Admin Hub (`/admin`)**<br>• Manage member database (view all registered users, remove members)<br>• Add new book titles directly to inventory<br>• Review community book donations & active rental logs |
| 📖 **READER (Community Member)** | `reader@socialshelf.org` | `password123` | • Borrow books for 7, 14, or 30 days with zero deposit<br>• Manage personal active rentals & 1-click renewals (+7 days)<br>• Donate pre-loved books and see name on Donors Wall<br>• RSVP for reading circles & workshops |
| 🤝 **VOLUNTEER (Community Host)** | `volunteer@socialshelf.org` | `password123` | • Help organize weekend reading circles<br>• Assist in verifying book donations and cataloging |

### 🔑 How Anyone Can Log In:
1. Visit **[https://pradyumnasangamkar.github.io/SocialShelf/#/login](https://pradyumnasangamkar.github.io/SocialShelf/#/login)**.
2. Click any of the **1-Click Demo Access buttons** (`👑 Librarian`, `📖 Reader`, `🤝 Volunteer`) for instant one-click login.
3. Or enter custom credentials, or click **Create Account** to register a new member in the database!

---

## 🗄️ How the Database is Maintained

The application implements a decoupled **Repository / Context Pattern** using browser-persistent collections (`localStorage`):
* `socialshelf_users` — stores member profiles, roles, join dates, and borrow/donation activity counts.
* `socialshelf_books` — catalog inventory, available copies, genres, pages, and rental rates.
* `socialshelf_rentals` — active borrowed books with automated due date tracking and return logs.
* `socialshelf_donations` — community book donations with donor attribution.
* `socialshelf_events` — literary meets and registered attendee lists.

> **Interview Explanation:**  
> *"I structured the frontend state using React Context to simulate real REST/MongoDB collections. All actions (renting, returning, donating, and user sign-ups) persist across browser sessions. This allows reviewers to experience a complete, interactive full-stack feel directly from a GitHub Pages link without server cold starts."*

---

## 🌟 Key Application Features

1. **📚 Explore Book Catalog (`/books`)**:
   - Filter by genre (Technology, Fiction, Science, Self-Help, Philosophy).
   - Real-time search across titles, authors, and keywords.
   - Comprehensive book details modal with page counts, ISBN, and stock levels.
2. **🔄 Rent & Borrow Management (`/rent`)**:
   - Zero-security-deposit borrowing model.
   - Active rentals tracker with due date countdown badges.
   - 1-click rental renewal (+7 days) and instant book return actions.
3. **👑 Librarian Management Hub (`/admin`)**:
   - Complete Member Database view (ID, Name, Email, Role, Joined Date, Activity).
   - Book Inventory manager: add new titles, adjust copies, and remove books.
   - Rental logs and donation verification table.
4. **❤️ Community Book Donations (`/donate`)**:
   - Interactive donation form with book condition and pickup hub selection.
   - Live Community Donors Wall recognizing readers who contribute books.
5. **🎟️ Literary Events & Book Clubs (`/events`)**:
   - Upcoming author meets, reading circles, and workshops.
   - Instant RSVP registration toggle with live attendee counter.
6. **🤝 Volunteer Portal (`/volunteer`)**:
   - Community roles (Community Librarian, Reading Circle Host, Book Courier, Digital Curator).
   - Direct online volunteer sign-up form.
7. **📍 Neighborhood Hubs & FAQ (`/contact`)**:
   - Physical hub locations in major cities (Pune, Bangalore, Mumbai).
   - Interactive FAQ accordion for library guidelines.

---

## 🛠️ Minimal, Clean Tech Stack

* **Frontend:** React 18, JavaScript (ES6+), JSX
* **Build Tool:** Vite 5 (lightning-fast, 0-config builds)
* **Routing:** React Router v6 (`HashRouter` — guarantees 0 404s on page refresh)
* **Styling:** Pure CSS3 (custom properties, literary typography, responsive layout — **zero Tailwind/Bootstrap**)
* **State & Database:** React Context API + LocalStorage Collections (Users, Books, Rentals, Donations)
* **CI/CD Deployment:** GitHub Actions (automated build & publish)

---

## 🚀 Running the Project Locally

```bash
git clone https://github.com/pradyumnasangamkar/SocialShelf.git
cd SocialShelf
npm install --ignore-scripts
npm run dev
```
Open **http://localhost:3000** in your browser.

---

## 👨‍💻 Developer

Built with ❤️ by **Pradyumna Sangamkar** to demonstrate clean frontend architecture, state management, and production-quality UI design.
