import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ListingCard = ({ listing }) => {
  const { title, amount, Availability, location, _id, photo } = listing;

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.15),0_20px_25px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_6px_8px_-1px_rgba(0,0,0,0.1),0_15px_20px_-3px_rgba(0,0,0,0.2),0_25px_30px_-5px_rgba(0,0,0,0.25)] transition-all duration-300"
      whileHover={{ y: -4, scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with intense shadow effect */}
      <div className="relative h-52 overflow-hidden group">
        <div className="absolute inset-0 shadow-inner rounded-t-xl" />
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={photo || "/default-roommate.jpg"} 
          alt={title}
          onError={(e) => {
            e.target.src = "/default-roommate.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {Availability}
          </span>
        </div>
      </div>

      {/* Card Content with depth effect */}
      <div className="p-5 bg-white relative z-10">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1.5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-600 font-bold">${amount}<span className="text-gray-500 font-medium text-sm">/mo</span></p>
          
          {/* Premium View Button */}
          <Link 
            to={`/roomdetails/${_id}`}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
          >
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;