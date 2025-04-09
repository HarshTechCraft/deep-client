// WeddingCounselingSection.js
import React from "react";
import "../style/WeddingCounselingSection.css"; // Import the CSS file
import circleImage1 from "../images/circle-image1.png"; // Replace with actual image paths
import circleImage2 from "../images/circle-image2.png";
import circleImage3 from "../images/circle-image3.png";

const WeddingCounselingSection = () => {
  return (
    <section className="counseling-section">
      {/* Text and Button */}
      <div className="counseling-content">
        <h2 className="counseling-title">Get free wedding counseling</h2>
        <p className="counseling-text">
          Book your dream wedding destination with us, we give free counseling
          to new bride to be and groom to be.
        </p>
        <button className="counseling-button">
          Get free wedding counseling <span className="button-icon">🤝</span>
        </button>
      </div>

      {/* Circular Images */}
      <div className="circle-images">
        <img
          src={circleImage1}
          alt="Wedding Scene 1"
          className="circle-image"
        />
        <img
          src={circleImage2}
          alt="Wedding Scene 2"
          className="circle-image"
        />
        <img
          src={circleImage3}
          alt="Wedding Scene 3"
          className="circle-image"
        />
      </div>
    </section>
  );
};

export default WeddingCounselingSection;
