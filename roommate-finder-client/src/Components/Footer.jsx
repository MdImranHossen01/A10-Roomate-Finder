import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* ────────── Top section ────────── */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">
        {/* Brand / blurb */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <Link to="/" aria-label="Home" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-gray-400 text-center lg:text-left max-w-xs">
            Building reliable digital experiences since 2025.
          </p>
        </div>

        {/* Link columns */}
        <nav
          className="grid grid-cols-2 gap-8 text-sm lg:col-span-2 sm:grid-cols-3"
          aria-label="Footer"
        >
          {/* Column 1 */}
          <div>
            <h3 className="mb-4 font-semibold tracking-widest uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/termandconditions"
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Terms&nbsp;&amp;&nbsp;Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 font-semibold tracking-widest uppercase">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Social */}
          <div>
            <h3 className="mb-4 font-semibold tracking-widest uppercase">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              {/* Facebook */}
              <li>
                <a
                  href="https://facebook.com/janopriyoshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16C7.161 0 0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803V20.626H9.437v-4.625h4.063V12.474c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584.312 3.584.312v3.937H21.104c-1.984 0-2.604 1.235-2.604 2.5v3h4.437L22.225 20.626h-3.724v11.177C26.145 30.604 32 23.984 32 16z" />
                  </svg>
                </a>
              </li>

              {/* X / Twitter */}
              <li>
                <a
                  href="https://x.com/connectjia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417A9.868 9.868 0 010 19.545a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63A9.936 9.936 0 0024 4.597l-.046-.028z" />
                  </svg>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://instagram.com/jiapixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0c-4.349 0-4.891.021-6.593.093C7.698.176 6.542.441 5.522.837 4.47 1.249 3.574 1.796 2.689 2.686c-.891.885-1.443 1.781-1.849 2.833C.444 6.539.179 7.695.093 9.404.016 11.107 0 11.648 0 16s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885.412 1.052.959 1.948 1.849 2.833.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745C20.891.021 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553.751.291 1.276.635 1.844 1.197.557.557.901 1.088 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.563.557-1.099.901-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459 0-4.26.027-4.781.084-6.479.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557 1.697-.061 2.197-.083 6.473-.083zm0 4.907c-4.541 0-8.213 3.677-8.213 8.213s3.677 8.213 8.213 8.213 8.213-3.677 8.213-8.213-3.677-8.213-8.213-8.213zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333 5.333 2.385 5.333 5.333-2.385 5.333-5.333 5.333zm10.464-13.874c0 1.063-.865 1.921-1.923 1.921s-1.921-.859-1.921-1.921c0-1.057.864-1.917 1.921-1.917s1.923.86 1.923 1.917z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* ────────── Bottom bar ────────── */}
      <div className="border-t border-gray-700 py-6 text-center text-xs text-gray-500">
        © {year} Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
