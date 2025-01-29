import React, { useRef, useState, useEffect } from "react";
import "../style/PopularSearches.css";
import img1 from "../images/PS1.jpeg";
import img2 from "../images/PS2.jpeg";
import img3 from "../images/PS3.jpeg";
import img4 from "../images/PS4.jpeg";
import img5 from "../images/PS5.jpeg";
import img6 from "../images/PS6.jpeg";
import img7 from "../images/PS7.jpeg";

const PopularSearches = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Scroll functions for left and right arrows
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
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
      image: img1, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Photographers",
      image: img2, // Replace with actual image URL
    },
    {
      id: 3,
      title: "Invitations",
      image: img3, // Replace with actual image URL
    },
    {
      id: 4,
      title: "Catering Services",
      image: img4, // Replace with actual image URL
    },
    {
      id: 5,
      title: "Groom Wear",
      image: img5, // Replace with actual image URL
    },
    {
      id: 6,
      title: "Mehendi Artist",
      image: img6, // Replace with actual image URL
    },
    {
      id: 7,
      title: "Decorators",
      image: img7, // Replace with actual image URL
    },
    {
      id: 8,
      title: "Invitations",
      image: img1, // Replace with actual image URL
    },
    {
      id: 9,
      title: "Catering Services",
      image: img2, // Replace with actual image URL
    },
    {
      id: 10,
      title: "Groom Wear",
      image: img3, // Replace with actual image URL
    },
    // Add more items as needed
  ];

  // Observer for animations
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Default viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 50% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, options);
    const searchCards = document.querySelectorAll(".search-card");
    searchCards.forEach((card) => observer.current.observe(card));

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className="popular-searches container">
      <h2 style={{ position: "relative", zIndex: "-1" }}>Popular Searches</h2>
      <div className="search-container2">
        {/* Conditionally render the left arrow button */}
        {showLeftArrow && (
          <button className="scroll-button left z-1" onClick={scrollRight}>
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
