import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ListingCard = ({ listing, listings, setListings }) => {
  const { title, amount, Availability, location, _id, photo } = listing;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://room-mate-finder-server.vercel.app/addlisting/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your listing has been deleted.",
                icon: "success",
              });
              const remainingListings = listings.filter(
                (list) => list._id !== _id
              );
              setListings(remainingListings);
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl border-2">
      <figure className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={photo} alt={title} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold truncate">{title}</h2>
        <div className="text-sm text-gray-700">
          <p className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">{location}</span>
          </p>
          <p className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V9m0 3v2m0 3.99V21"
              />
            </svg>
            <span className="font-semibold text-green-600">${amount}/month</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Available: <span className="ml-1 font-medium">{Availability}</span>
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/roomdetails/${_id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
          {/* <Link to={`/updatelisting/${_id}`} className="btn btn-info btn-sm">
            Edit
          </Link> */}
          {/* <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
