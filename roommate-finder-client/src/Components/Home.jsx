import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Slider from "./Slider";
import HowItWorks from "./HowItWork";
import Testimonials from "./Testimonials";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import animationData from '../assets/roommate-animation.json'; 
import Loading from "./Loading";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://room-mate-finder-server.vercel.app/featured-listings") 
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured listings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto">
      <Slider />
      <h1 className="text-center m-6 text-3xl font-bold">Featured Roommate Post</h1>
      <Fade direction="up" triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.slice(0, 6).map((listing) => (
            <ListingCard
              key={listing._id}
              listings={listings}
              setListings={setListings}
              listing={listing}
            />
          ))}
        </div>
      </Fade>
      <Fade direction="up" triggerOnce><HowItWorks /></Fade>
      <Fade direction="up" triggerOnce><Testimonials /></Fade>
      {/* Lottie Animation */}
      <div className="w-full flex justify-center mb-6">
        <Lottie animationData={animationData} loop={true} style={{ height: 600 }} />
      </div>
    </div>
  );
};

export default Home;
