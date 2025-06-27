import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHeart,
} from "react-icons/fa";
import { MdPets, MdSmokeFree, MdNightlight } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeaturedListings from "./Featured";

const ListingDetails = () => {
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
  } = useLoaderData();

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`listing_${_id}_likes`);
    const savedLikeStatus = localStorage.getItem(`listing_${_id}_liked`);

    if (savedLikes) setLikeCount(parseInt(savedLikes));
    if (savedLikeStatus === "true") {
      setIsLiked(true);
      setShowContact(true);
    }
  }, [_id]);

  const handleLike = () => {
    let newLikeCount;
    let newLikeStatus;

    if (isLiked) {
      newLikeCount = likeCount - 1;
      newLikeStatus = false;
      setShowContact(false);
    } else {
      newLikeCount = likeCount + 1;
      newLikeStatus = true;
      setShowContact(true);
      toast.success("Contact number is now visible!");
    }

    setLikeCount(newLikeCount);
    setIsLiked(newLikeStatus);

    localStorage.setItem(`listing_${_id}_likes`, newLikeCount.toString());
    localStorage.setItem(`listing_${_id}_liked`, newLikeStatus.toString());
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ToastContainer position="top-center" autoClose={2000} />

      {likeCount > 0 && (
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {likeCount} {likeCount === 1 ? "person is" : "people are"} interested
          in this property
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {title}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-end gap-4">
          <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-lg text-xl font-semibold whitespace-nowrap">
            ${amount}/month
          </div>

          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              isLiked
                ? "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            aria-label={isLiked ? "Unlike this property" : "Like this property"}
          >
            <FaHeart
              className={`transition-transform duration-200 ${
                isLiked ? "text-red-500 dark:text-red-400 scale-110" : ""
              }`}
            />
            <span className="font-medium">{isLiked ? "Liked" : "Like"}</span>
          </button>

          {/* 👇 Contact Number shown only when liked */}
          {showContact && (
            <div className="flex items-center text-indigo-600 dark:text-indigo-300 mt-2">
              <FaPhone className="mr-2" />
              <a href={`tel:${contact}`} className="hover:underline">
                {contact}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden h-96">
            {photo ? (
              <img
                src={photo}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span>No image available</span>
              </div>
            )}
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description || "No description provided."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-500 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">
                  {location}
                </span>
              </div>
              <div className="flex items-center">
                <FaBed className="text-gray-500 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300 capitalize">
                  {type}
                </span>
              </div>
              <div className="flex items-center">
                <FaUser className="text-gray-500 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">
                  {username}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Lifestyle
            </h2>
            <div className="flex flex-wrap gap-3">
              {lifestyle?.includes("Pets") && (
                <span className="flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  <MdPets className="mr-1" /> Pets
                </span>
              )}
              {lifestyle?.includes("Non-smoker") && (
                <span className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  <MdSmokeFree className="mr-1" /> Non-smoker
                </span>
              )}
              {lifestyle?.includes("Night owl") && (
                <span className="flex items-center bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  <MdNightlight className="mr-1" /> Night owl
                </span>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Contact
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 dark:text-gray-400 mr-3" />
                <a
                  href={`mailto:${email}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {email}
                </a>
              </div>

              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200">
                Message {username}
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedListings></FeaturedListings>
    </div>
  );
};

export default ListingDetails;
