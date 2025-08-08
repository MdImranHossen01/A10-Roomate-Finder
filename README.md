

# 🏠 HomaRoom – Roommate Finder Platform

![HomaRoom Banner](./screenshot.png) <!-- Replace screenshot.png with your actual image file name -->

**Frontend Live:** [https://roommate-finder-5c556.web.app/](https://roommate-finder-5c556.web.app/)  
**Backend API:** [https://room-mate-finder-server.vercel.app/](https://room-mate-finder-server.vercel.app/)

---

## 📌 Project Theme
HomaRoom is a platform that helps individuals find compatible roommates based on **location**, **budget**, **lifestyle preferences**, and **interests**.  
Users can create listings, browse roommate posts, and connect through contact details.  
The application is **fully responsive** and built with **React**, **Firebase**, **MongoDB**, and **Express.js**.

---

## ✨ Features

- 🔐 **User Authentication:** Email/password & Google login, protected routes, dynamic navbar.
- 📝 **Roommate Listings:** Add, browse, update, and delete listings with full CRUD via MongoDB.
- 💖 **Like & Reveal:** Like a post to reveal contact details, with live like count.
- 🎨 **Modern UI:** Dark/light mode, smooth animations, unique layout.
- 📈 **Dashboard & Browse Views:** “My Listings” and all public listings with card/table view.
- 📱 **Fully Responsive:** Works on mobile, tablet, and desktop.
- ⚡ **Performance:** Optimized rendering and smooth routing.

---

## 🧭 Pages and Routing

- `/` — Home (banner, featured listings, extra sections)
- `/login` — Login page (email/password, Google login)
- `/register` — Register page with password validation
- `/add-roommate` — Add new listing **(protected)**
- `/browse` — Browse all listings
- `/my-listings` — User-specific listings **(protected)**
- `/update/:id` — Edit a listing **(protected)**
- `/details/:id` — Detailed listing view with like functionality **(protected)**
- `*` — Custom 404 page

---

## 💻 Tech Stack

### **Frontend**
- React
- React Router DOM
- Tailwind CSS + DaisyUI
- Firebase Authentication
- SweetAlert2, React Toastify
- Lottie React, React Simple Typewriter, React Awesome Reveal
- Netlify (deployment)

### **Backend**
- Node.js
- Express.js
- MongoDB
- CORS, dotenv
- Vercel (deployment)

---

## 🚀 Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/MdImranHossen01/A10-Roomate-Finder.git
cd A10-Roomate-Finder
````

### **2️⃣ Install dependencies**

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd server
npm install
```

### **3️⃣ Set up environment variables**

**Frontend (`client/.env`):**

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_project_id.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

**Backend (`server/.env`):**

```env
PORT=5000
DB_URI=your_mongodb_uri
```

### **4️⃣ Run the development servers**

**Frontend**

```bash
npm run dev
```

**Backend**

```bash
npm start
```

### **5️⃣ Open in browser**

```
http://localhost:5173
```

---

## 🔐 Authentication Logic

* Email/password & Google authentication
* Password must have at least:

  * 1 uppercase letter
  * 1 lowercase letter
  * Minimum 6 characters
* Protected routes redirect unauthenticated users to `/login`
* Conditional navbar (login/signup vs. profile/logout)

---

## 🔄 CRUD Operations

* **Create:** Add roommate listing with validation
* **Read:** View all or user-specific listings
* **Update:** Edit listing (email/username read-only)
* **Delete:** SweetAlert confirmation before deletion

---

## 🎁 Bonus Features

* 🎥 Lottie animations
* 🧠 React Simple Typewriter headlines
* 🌀 React Awesome Reveal transitions
* 🌒 Dark/light mode toggle
* 🔍 Conditional “See More” buttons
* ❌ Custom 404 page
* ⏳ Loading spinners

---

## 🔗 Live Links

* 🌐 **Frontend:** [https://roommate-finder-5c556.web.app/](https://roommate-finder-5c556.web.app/)
* 🖥 **Backend API:** [https://room-mate-finder-server.vercel.app/](https://room-mate-finder-server.vercel.app/)

---

**HomaRoom – Find the perfect roommate, faster! 🏡**

```


If you want, I can now make the **Pathchakro README** match this same polished format so both repos look consistent.
```
