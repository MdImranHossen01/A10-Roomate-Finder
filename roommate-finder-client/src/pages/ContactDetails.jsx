import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Office</h2>
          <p className="flex items-center mb-3 text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-3 text-indigo-500" />
            123 Hot Room Avenue, Dhaka, Bangladesh
          </p>
          <p className="flex items-center mb-3 text-gray-600 dark:text-gray-300">
            <FaPhoneAlt className="mr-3 text-indigo-500" />
            +880 123-456-7890
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <FaEnvelope className="mr-3 text-indigo-500" />
            support@hotroom.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
