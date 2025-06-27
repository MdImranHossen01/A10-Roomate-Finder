import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Slider from "./Slider";
import HowItWorks from "./HowItWork";
import Testimonials from "./Testimonials";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import animationData from '../assets/roommate-animation.json'; 
import Loading from "./Loading";
import Faq from "../pages/Faq";
import ErrorMessage from "./ErrorMessage"; // Create this component for error display

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("https://room-mate-finder-server.vercel.app/featured-listings");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setListings(data);
      } catch (err) {
        console.error("Error fetching featured listings:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="w-11/12 mx-auto">
      {/* Hero Slider */}
      <Slider />

      {/* Featured Listings */}
      <section className="my-16">
        <Fade direction="up" triggerOnce>
          <h2 className="text-center text-3xl font-bold mb-12">
            Featured Roommate Posts
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2"></span>
          </h2>
        </Fade>
        
        {listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No featured listings available at the moment.</p>
          </div>
        ) : (
          <Fade direction="up" triggerOnce cascade damping={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {listings.slice(0, 8).map((listing) => (
                <ListingCard
                  key={listing._id}
                  listing={listing}
                />
              ))}
            </div>
          </Fade>
        )}
      </section>

      {/* How It Works */}
      <section className="my-16">
        <Fade direction="up" triggerOnce>
          <HowItWorks />
        </Fade>
      </section>

      {/* Testimonials */}
      <section className="my-16">
        <Fade direction="up" triggerOnce>
          <Testimonials />
        </Fade>
      </section>

      {/* FAQ Section */}
      <section className="my-16">
        <Fade direction="up" triggerOnce>
          <Faq />
        </Fade>
      </section>

      {/* Animation Section */}
      <section className="my-16">
        <Fade direction="up" triggerOnce>
          <div className="w-full flex justify-center">
            <div className="max-w-3xl">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                style={{ height: 'auto', maxHeight: '500px' }} 
              />
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Home;