import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const AddRoomMate = () => {
  const { user } = useContext(AuthContext);

  const handleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listingData = Object.fromEntries(formData.entries());

    fetch("https://room-mate-finder-server.vercel.app/addlisting", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(listingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Listing Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-purple-100 via-pink-50 to-yellow-50 py-12 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-purple-700 drop-shadow-md">
        Add Roommate
      </h1>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 ring-1 ring-purple-200">
        <form onSubmit={handleAddListing} className="space-y-7">
          <fieldset className="border border-purple-200 rounded-lg p-6">
            <legend className="text-2xl font-semibold text-purple-700 px-2">
              Page Details
            </legend>

            {/* Title */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue="Spacious Room with Attached Balcony"
              placeholder="Title"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />

            {/* Location */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              defaultValue="Miami, Florida"
              placeholder="Location"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />

            {/* Amount */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="amount">
              Amount
            </label>
            <input
              id="amount"
              type="text"
              name="amount"
              defaultValue="1,800"
              placeholder="Rent Amount"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />

            {/* Type */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              name="type"
              defaultValue="Shared"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              <option disabled>Select Type</option>
              <option>Single</option>
              <option>Shared</option>
            </select>

            {/* Lifestyle */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="lifestyle">
              Lifestyle
            </label>
            <select
              id="lifestyle"
              name="lifestyle"
              defaultValue="Not Smoker"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              <option disabled>Select lifestyle Type</option>
              <option>Pet Lover</option>
              <option>Not Smoker</option>
              <option>Night Owl</option>
            </select>

            {/* Description */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              defaultValue="Modern room for rent in a quiet home with a private attached bathroom. Fully furnished with a queen bed, AC, and Wi-Fi. Walking distance to grocery stores and bus stops. Perfect for someone looking for comfort and privacy."
              placeholder="Description"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            {/* Contact */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="contact">
              Contact
            </label>
            <input
              id="contact"
              type="text"
              name="contact"
              defaultValue="(305) 555-9012"
              placeholder="Contact Info"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            {/* Availability */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="Availability">
              Availability
            </label>
            <select
              id="Availability"
              name="Availability"
              defaultValue="Available"
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              <option disabled>Select Availability</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>

            {/* Photo */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="photo">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              name="photo"
              placeholder="Photo Url"
              required
              className="w-full rounded-lg border border-purple-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            {/* User Name (Read Only) */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="username">
              User Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={user?.displayName || ""}
              readOnly
              placeholder="User Name"
              className="w-full rounded-lg border border-gray-300 bg-purple-50 text-purple-700 cursor-not-allowed px-4 py-2"
            />

            {/* User Email (Read Only) */}
            <label className="block text-purple-800 font-medium mb-2 mt-6" htmlFor="email">
              User Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={user?.email || ""}
              readOnly
              placeholder="User Email"
              className="w-full rounded-lg border border-gray-300 bg-purple-50 text-purple-700 cursor-not-allowed px-4 py-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold text-lg shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all"
            >
              Add Listing
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddRoomMate;
