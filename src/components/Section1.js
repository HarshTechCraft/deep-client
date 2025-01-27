import React, { useEffect, useState } from "react";
import "../style/Section1.css";
import image1 from "../images/homePage1.jpeg"; // Replace with actual image paths
import image2 from "../images/homePage2.jpeg";
import image3 from "../images/homePage3.jpeg";

function Section1() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when element is in view
          }
        });
      },
      { threshold: 0.5 } // 50% of the component should be visible to trigger animation
    );

    const section = document.querySelector(".section1-container");
    if (section) observer.observe(section);

    // Clean up the observer on unmount
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className={`section1-container ${isVisible ? "animate" : ""}`}>
      <div className={`section1-images ${isVisible ? "animate" : ""}`}>
        <img
          src={image1}
          alt="Pool view"
          className={`section1-image ${isVisible ? "animate" : ""}`}
        />
        <img
          src={image2}
          alt="Vintage Sofa"
          className={`section1-image center-image ${
            isVisible ? "animate" : ""
          }`}
        />
        <img
          src={image3}
          alt="Dining setup"
          className={`section1-image ${isVisible ? "animate" : ""}`}
        />
      </div>
      <div className={`section1-text ${isVisible ? "animate" : ""}`}>
        <p className="section1-subtitle">Announcing the 2024</p>
        <h1 className="section1-title">OPEN DOOR AWARDS</h1>
        <a href="/" className="section1-link">
          Discover the best in space rentals →
        </a>
      </div>
    </div>
  );
}

export default Section1;
