import React from 'react';
import { FaSearch, FaHandshake, FaHome, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: "Find Your Perfect Place",
      description: "Browse through hundreds of listings to find rooms or apartments that match your preferences."
    },
    {
      icon: <FaUserCheck className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: "Connect with Roommates",
      description: "Message potential roommates or landlords directly through our secure platform."
    },
    {
      icon: <FaHandshake className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: "Make an Agreement",
      description: "Once you've found the right match, finalize the details and make arrangements."
    },
    {
      icon: <FaHome className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: "Move In",
      description: "Welcome to your new home! Enjoy your space and new community."
    }
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-800 rounded-xl my-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">How Hot Room Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple steps to find your perfect room or roommate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to find your perfect room or roommate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of students and young professionals who found their ideal living space through Hot Room.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to='/browselistings'>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-200">
                Browse Listings
              </button>
             </Link>
              <Link to='/addroommate'>
              <button className="px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-indigo-600 dark:text-indigo-300 rounded-lg border border-indigo-600 dark:border-indigo-400 transition duration-200">
                List Your Space
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;