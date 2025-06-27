import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Fade } from "react-awesome-reveal";
import ListingCard from "../Components/ListingCard";

const BrowseListings = () => {
  const initialListings = useLoaderData();
  const [listings, setListings] = useState(initialListings);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    location: "",
    availability: ""
  });

  // Sort listings by price
  const sortListings = (order) => {
    const sorted = [...listings].sort((a, b) => {
      return order === "asc" ? a.amount - b.amount : b.amount - a.amount;
    });
    setListings(sorted);
    setSortOrder(order);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...initialListings];

    if (filters.minPrice) {
      filtered = filtered.filter(listing => listing.amount >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(listing => listing.amount <= Number(filters.maxPrice));
    }

    if (filters.location) {
      filtered = filtered.filter(listing =>
        listing.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.availability) {
      filtered = filtered.filter(listing => listing.Availability === filters.availability);
    }

    setListings(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      location: "",
      availability: ""
    });
    setListings(initialListings);
    setSortOrder("asc");
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <Fade direction="up" triggerOnce>
        <h2 className="text-center text-3xl font-bold mb-6">
          All Roommate Posts
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>
      </Fade>

      {/* Filter and Sort Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="$ Min"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="$ Max"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter location"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <select
              value={filters.availability}
              onChange={(e) => setFilters({...filters, availability: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="Available">Available</option>
              <option value="Soon">Soon</option>
              <option value="Occupied">Occupied</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => sortListings("asc")}
              className={`px-4 py-2 rounded-md ${sortOrder === "asc" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => sortListings("desc")}
              className={`px-4 py-2 rounded-md ${sortOrder === "desc" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Price: High to Low
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <section className="my-8">
        {listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No listings match your filters.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <Fade direction="up" triggerOnce cascade damping={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {listings.map((listing) => (
                <ListingCard
                  key={listing._id}
                  listing={listing}
                />
              ))}
            </div>
          </Fade>
        )}
      </section>
    </div>
  );
};

export default BrowseListings;