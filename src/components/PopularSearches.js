import React, { useRef, useState, useEffect } from "react";
import "../style/PopularSearches.css";
import img from "../images/dummy_image1.jpg";

const PopularSearches = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Scroll functions for left and right arrows
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
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

  const popularSearches = [
    {
      id: 1,
      title: "Bridal Makeup",
      image: img, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Photographers",
      image: img, // Replace with actual image URL
    },
    {
      id: 3,
      title: "Invitations",
      image: img, // Replace with actual image URL
    },
    {
      id: 4,
      title: "Catering Services",
      image: img, // Replace with actual image URL
    },
    {
      id: 5,
      title: "Groom Wear",
      image: img, // Replace with actual image URL
    },
    {
      id: 6,
      title: "Bridal Makeup",
      image: img, // Replace with actual image URL
    },
    {
      id: 7,
      title: "Photographers",
      image: img, // Replace with actual image URL
    },
    {
      id: 8,
      title: "Invitations",
      image: img, // Replace with actual image URL
    },
    {
      id: 9,
      title: "Catering Services",
      image: img, // Replace with actual image URL
    },
    {
      id: 10,
      title: "Groom Wear",
      image: img, // Replace with actual image URL
    },
    // Add more items as needed
  ];

  return (
    <div className="popular-searches container">
      <h2>Popular Searches</h2>
      <div className="search-container2">
        {/* Conditionally render the left arrow button */}
        {showLeftArrow && (
          <button className="scroll-button left" onClick={scrollRight}>
            &#8249;
          </button>
        )}

        <div className="search-cards" ref={scrollRef}>
          {popularSearches.map((search) => (
            <div className="search-card" key={search.id}>
              <img
                src={search.image}
                alt={search.title}
                className="search-image"
              />
              <h2>{search.title}</h2>
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

export default PopularSearches;
