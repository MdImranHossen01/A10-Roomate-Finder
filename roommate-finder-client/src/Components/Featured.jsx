import React from 'react';
import { Link } from 'react-router';
import { FaStar, FaMapMarkerAlt, FaBed, FaMoneyBillWave } from 'react-icons/fa';

const FeaturedListings = () => {
  // Sample data - replace with actual data from your backend
  const featuredListings = [
    {
      id: 1,
      title: "Cozy Downtown Apartment",
      location: "New York, NY",
      type: "Private Room",
      price: 1200,
      rating: 4.8,
      photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Modern Studio Near Campus",
      location: "Boston, MA",
      type: "Studio",
      price: 950,
      rating: 4.5,
      photo: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Luxury Condo with City View",
      location: "Chicago, IL",
      type: "Entire Apartment",
      price: 1800,
      rating: 4.9,
      photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 my-10 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Featured Listings</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the most popular rooms and apartments available right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={listing.photo} 
                  alt={listing.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{listing.title}</h3>
                  <div className="flex items-center bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">
                    <FaStar className="mr-1" />
                    <span>{listing.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{listing.location}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaBed className="mr-2" />
                    <span className="capitalize">{listing.type}</span>
                  </div>
                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold">
                    <FaMoneyBillWave className="mr-2" />
                    <span>${listing.price}/mo</span>
                  </div>
                </div>
                
                <Link 
                  to={`/listings/${listing.id}`} 
                  className="mt-4 block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/browselistings" 
            className="inline-block px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-900 transition-colors duration-200"
          >
            Browse All Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;