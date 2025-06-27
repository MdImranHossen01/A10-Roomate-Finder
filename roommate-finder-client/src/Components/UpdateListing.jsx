import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateListing = () => {
  const {
    title,
    amount,
    contact,
    description,
    email,
    lifestyle,
    location,
    type,
    username,
    _id,
    photo,
    Availability,
  } = useLoaderData();

  const handleUpdateListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedListing = Object.fromEntries(formData.entries());

    fetch(`https://room-mate-finder-server.vercel.app/addlisting/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
      <h1 className="text-5xl font-extrabold mb-10 text-gray-800">Update Listing</h1>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
        <form onSubmit={handleUpdateListing} className="space-y-6">
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-xl font-semibold px-2">Page Details</legend>

            <div className="flex flex-col">
              <label htmlFor="title" className="mb-1 font-medium text-gray-700">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Title"
                required
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="location" className="mb-1 font-medium text-gray-700">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Location"
                required
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="amount" className="mb-1 font-medium text-gray-700">Amount</label>
              <input
                id="amount"
                type="text"
                name="amount"
                defaultValue={amount}
                placeholder="Rent Amount"
                required
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="type" className="mb-1 font-medium text-gray-700">Type</label>
              <input
                id="type"
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Room Type"
                required
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="lifestyle" className="mb-1 font-medium text-gray-700">Lifestyle</label>
              <input
                id="lifestyle"
                type="text"
                name="lifestyle"
                defaultValue={lifestyle}
                placeholder="Lifestyle Preference"
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="description" className="mb-1 font-medium text-gray-700">Description</label>
              <input
                id="description"
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="contact" className="mb-1 font-medium text-gray-700">Contact</label>
              <input
                id="contact"
                type="text"
                name="contact"
                defaultValue={contact}
                placeholder="Contact Info"
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="Availability" className="mb-1 font-medium text-gray-700">Availability</label>
              <select
                id="Availability"
                name="Availability"
                defaultValue={Availability || "Available"}
                className="select w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option disabled>Select Availability</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="photo" className="mb-1 font-medium text-gray-700">Photo URL</label>
              <input
                id="photo"
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="username" className="mb-1 font-medium text-gray-700">User Name</label>
              <input
                id="username"
                type="text"
                name="username"
                defaultValue={username}
                readOnly
                className="input input-bordered w-full rounded-md border px-3 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">User Email</label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={email}
                readOnly
                className="input input-bordered w-full rounded-md border px-3 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-8 py-3 font-semibold text-lg rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Update Listing
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateListing;
