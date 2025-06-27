import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

const BrowseListings = () => {
  const initialListings = useLoaderData();
  const [listings] = useState(initialListings);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-bold mb-6">All Roommate Posts</h1>
      <p className="text-gray-400">Explore available roommate listings with detailed information on location, rent, and lifestyle preferences. Browse posts and click "See More" to view full details for each listing.</p>

      <div className="overflow-x-auto shadow-md rounded-lg my-10">
        <table className="min-w-full text-sm text-left text-purple-800 border border-purple-300">
          <thead className="bg-purple-100 text-purple-900 text-md">
            <tr>
              <th className="py-3 px-4 border">Photo</th>
              <th className="py-3 px-4 border">Title</th>
              <th className="py-3 px-4 border">Location</th>
              <th className="py-3 px-4 border">Amount</th>
              <th className="py-3 px-4 border">Type</th>
              <th className="py-3 px-4 border">Availability</th>
              <th className="py-3 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id} className="hover:bg-purple-50">
                <td className="py-3 px-4 border">
                  <img
                    src={listing.photo}
                    alt={listing.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </td>
                <td className="py-3 px-4 border">{listing.title}</td>
                <td className="py-3 px-4 border">{listing.location}</td>
                <td className="py-3 px-4 border">${listing.amount}</td>
                <td className="py-3 px-4 border">{listing.type}</td>
                <td className="py-3 px-4 border">{listing.Availability}</td>
                <td className="py-3 px-4 border">
                  <Link
                    to={`/roomdetails/${listing._id}`}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3 rounded transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListings;
