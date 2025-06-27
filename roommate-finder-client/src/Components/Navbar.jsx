import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Logo from "./Logo";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });

    return () => unsubscribe();
  }, []);

  // Update theme in localStorage and HTML
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("User signed out"))
      .catch((error) => console.error("Error signing out:", error));
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-indigo-100 text-indigo-600 font-medium dark:bg-indigo-900 dark:text-indigo-200"
        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-yellow-500 font-bold"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
      </li>

       <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
      </li>
       <li>
        <NavLink to="/faq" className={navLinkClass}>
         FAQ
        </NavLink>
      </li>
            <li>
        <NavLink to="/browselistings" className={navLinkClass}>
          Browse Listings
        </NavLink>
      </li>
      
       <li>
        <NavLink to="/terms-and-conditions" className={navLinkClass}>
          Terms & Conditions
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addroommate" className={navLinkClass}>
              Add to Find Roommate
            </NavLink>
          </li>
          <li>
            <NavLink to="/mylistings" className={navLinkClass}>
              My Listings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div 
      className={`navbar bg-base-100 shadow-sm dark:bg-gray-800 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Left side - logo and mobile menu */}
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
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
                onClick={() => setIsMenuOpen(false)}
              >
                {links}
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl dark:text-white">
           <Logo></Logo>
          </Link>
        </div>

        {/* Center - desktop navigation */}
        <div className="hidden lg:flex">
          <ul className="flex font-bold">{links}</ul>
        </div>

        {/* Right side - user and theme controls */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative group flex items-center gap-2">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
              />
              <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {user.displayName || "User"}
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-error text-white btn-sm"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signin" className="btn btn-primary text-white btn-sm">
              Sign In
            </Link>
          )}

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;