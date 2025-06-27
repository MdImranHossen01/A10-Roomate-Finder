import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";          // keep whichever router you use
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  /* ------------------------------ state ------------------------------ */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  /* ---------------------------- refs --------------------------------- */
  // ref that wraps the avatar button + dropdown
  const profileRef = useRef(null);

  /* ---------------------- auth state listener ------------------------ */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => unsubscribe();
  }, []);

  /* ----------------------------- theme ------------------------------- */
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /* -------------------------- scroll state --------------------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------- close profile dropdown on outside click ------------ */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ----------------------------- helpers ----------------------------- */
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleSignOut = () =>
    signOut(auth).catch((err) => console.error("Error signing out:", err));

  const closeAllDropdowns = () => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-indigo-100 text-indigo-600 font-medium dark:bg-indigo-900 dark:text-indigo-200"
        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-yellow-500 font-bold"
    }`;

  const publicLinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass} end onClick={closeAllDropdowns}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass} onClick={closeAllDropdowns}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={navLinkClass} onClick={closeAllDropdowns}>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/browselistings" className={navLinkClass} onClick={closeAllDropdowns}>
          Browse Listings
        </NavLink>
      </li>
      <li>
        <NavLink to="/termandconditions" className={navLinkClass} onClick={closeAllDropdowns}>
          Terms &amp; Conditions
        </NavLink>
      </li>
    </>
  );

  const privateLinks = [
    { to: "/addroommate", text: "Add to Find Roommate" },
    { to: "/mylistings", text: "My Listings" },
    { to: "/profile", text: "My Profile" },
    { to: "/settings", text: "Settings" },
  ];

  /* =========================== JSX =================================== */
  return (
    <div
      className={`navbar bg-base-100 shadow-sm dark:bg-gray-800 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* ---------------- left: logo + mobile menu ---------------- */}
        <div className="flex items-center">
          {/* mobile menu button */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* burger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
                onClick={closeAllDropdowns}
              >
                {publicLinks}
                {user && (
                  <>
                    {privateLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink to={link.to} className={navLinkClass}>
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>

          {/* brand */}
          <Link to="/" className="btn btn-ghost text-xl dark:text-white">
            <Logo />
          </Link>
        </div>

        {/* ---------------- center: desktop nav -------------------- */}
        <div className="hidden lg:flex">
          <ul className="flex font-bold">{publicLinks}</ul>
        </div>

        {/* ---------------- right: theme + user -------------------- */}
        <div className="flex items-center gap-3">
          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              /* moon icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              /* sun icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* user area */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() =>
                  setIsProfileDropdownOpen((prev) => !prev)
                }
                className="flex items-center gap-2 focus:outline-none"
                aria-label="User menu"
                aria-expanded={isProfileDropdownOpen}
              >
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
                />
              </button>

              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="py-1">
                      {privateLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          onClick={closeAllDropdowns}
                        >
                          {link.text}
                        </NavLink>
                      ))}
                      <button
                        onClick={() => {
                          handleSignOut();
                          closeAllDropdowns();
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to="/signin"
              className="btn btn-primary text-white btn-sm"
              onClick={closeAllDropdowns}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
