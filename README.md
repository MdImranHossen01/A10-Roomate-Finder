# 🏠 Website Name: HomaRoom

**firebase live link: https://roommate-finder-5c556.web.app/
Vercel Server: https://room-mate-finder-server.vercel.app/

## 📌 Project Theme
A platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create listings, browse roommate posts, and connect through contact details. The application is responsive and built using **React**, **Firebase**, **MongoDB**, and **Express.js**.

---

✨ Features
🔐 User Authentication: Secure login/register using email/password and Google with protected routes and dynamic navbar.

📝 Roommate Listings: Users can add, browse, update, and delete listings with full CRUD functionality connected to MongoDB.

💖 Like & Reveal Feature: Users can like posts to reveal contact information, with dynamic like count display.

🎨 Modern UI & Responsiveness: Fully responsive design with dark/light mode, custom animations, and unique layout.

📈 Dashboard & Browse Views: Filtered views for “My Listings” and all public listings in card/table formats with details view.
---

## 🧭 Pages and Routing

- `/` — Home (with Banner, Featured Listings, 2 extra sections)
- `/login` — Login page with email/password + Google login
- `/register` — Register page with password validation
- `/add-roommate` — Add new listing (🔒 protected route)
- `/browse` — View all listings
- `/my-listings` — View user-specific listings (🔒 protected)
- `/update/:id` — Update a specific listing (🔒 protected)
- `/details/:id` — Detailed view of a listing with like functionality (🔒 protected)
- `*` — Custom 404 Not Found page

---

## 💻 Technologies Used

### Client
- React
- React Router DOM
- Tailwind CSS + DaisyUI
- Firebase Authentication
- SweetAlert2 & React Toastify
- Lottie React, React Simple Typewriter, React Awesome Reveal
- Netlify (deployment)

### Server
- Node.js
- Express.js
- MongoDB
- Vercel (deployment)

---

📱 Responsiveness
The application is fully responsive for all devices:

✅ Mobile

✅ Tablet

✅ Desktop

🔄 GitHub Commits
✅ Minimum 15 notable commits on Client Side

✅ Minimum 8 notable commits on Server Side

⚙️ Functional Requirements
✅ Private Routes: Reloading doesn’t break protected routes.

✅ User-based Filtering: Users can only view/edit/delete their own listings.

✅ Dynamic Search/Browse: View roommate listings dynamically from MongoDB.

✅ Toast/Alerts: SweetAlerts and Toastify used for success/error notifications.

✅ No Lorem Ipsum: All content is meaningful and specific to the use case.

🔐 Authentication Logic
Email/Password validation on Register page

Must include at least one uppercase letter, one lowercase letter, and be 6+ characters

Toast & SweetAlert messages for login, registration, and error handling

Conditional Navbar showing login/signup or user profile & logout

Redirects unauthenticated users from private routes to the login page

🔄 CRUD Operations
Create: Add Roommate Listing with validation

Read: View all listings, view user listings, view listing details

Update: Edit listing via modal/page (username/email read-only)

Delete: Confirm before deletion via SweetAlert

🎁 Bonus Features
🎥 Lottie animations on Home page

🧠 React Simple Typewriter for headlines

🌀 React Awesome Reveal for section transitions

🌒 Dark/Light mode toggle for the whole app

🔍 “See More” buttons and conditional rendering logic

❌ 404 & Loading States
Custom 404 page included

Loading spinners on data-fetch and protected route access

