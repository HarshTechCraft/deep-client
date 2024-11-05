import React, { useRef, useState, useEffect } from "react";
import "../style/PopularVenueSearches.css";
import img from "../images/dummy_image2.jpg";

const PopularVenueSearches = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Scroll functions for left and right arrow
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  // Check scroll position to toggle left arrow visibility
  const handleScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const popularVenues = [
    {
      id: 1,
      title: "4 Star & Above Wedding Venues",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 2,
      title: "Banquet Halls",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 3,
      title: "Marriage Garden / Lawns",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 4,
      title: "4 Star & Above Wedding Venues",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 5,
      title: "Banquet Halls",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 6,
      title: "Marriage Garden / Lawns",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 7,
      title: "4 Star & Above Wedding Venues",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 8,
      title: "Banquet Halls",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 9,
      title: "Marriage Garden / Lawns",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 10,
      title: "4 Star & Above Wedding Venues",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 11,
      title: "Banquet Halls",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    {
      id: 12,
      title: "Marriage Garden / Lawns",
      image: img, // Replace with actual image URL
      locations: ["Mumbai", "Bangalore", "Pune"],
    },
    // Add more items as needed
  ];

  return (
    <div className="popular-venue-searches container">
      <h2>Popular Venue Searches</h2>
      <div className="venue-container">
        {/* Conditionally render the left arrow button */}
        {showLeftArrow && (
          <button className="scroll-button left" onClick={scrollRight}>
            &#8249;
          </button>
        )}

        <div className="venue-cards" ref={scrollRef}>
          {popularVenues.map((venue) => (
            <div className="venue-card" key={venue.id}>
              <img
                src={venue.image}
                alt={venue.title}
                className="venue-image"
              />
              <h3>{venue.title}</h3>
              <div className="venue-locations">
                {venue.locations.map((location, index) => (
                  <span key={index}>
                    {location} {index < venue.locations.length - 1 && "| "}
                  </span>
                ))}
                <a href="#" className="more-link">
                  More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="scroll-button right" onClick={scrollLeft}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PopularVenueSearches;
