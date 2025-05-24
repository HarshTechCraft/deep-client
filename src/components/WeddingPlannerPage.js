// WeddingPlannerPage.js
import React from "react";
import "../style/WeddingPlannerPage.css"; // Import the CSS file
import logoImage from "../images/SSLogo.png"; // Replace with the actual path to your logo image
import WeddingCounselingSection from "./WeddingCounselingSection"; // Import the second section
import OurServiceSection from "./OurServiceSection"; // Import the third section
import OurGallerySection from "./OurGallerySection"; // Import the fourth section
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NewHeader from "./NewHeader";

const WeddingPlannerPage = () => {
  return (
    <div className="">
      {/* First Section (Header and Main Section) */}
      <NewHeader />

      <section className="main-section ">
        <div className="swirl-design"></div>
        <div className="text-overlay">
          <h1 className="main-text">
            Let's Plan Your <br />
            <span className="highlight-text">Dream Wedding,</span> <br />
            Together
          </h1>
        </div>
        <button className="learn-more-button">
          <span className="button-icon">✿</span> Learn More{" "}
          <span className="button-arrow">→</span>
        </button>
      </section>

      {/* Second Section (Wedding Counseling) */}
      <WeddingCounselingSection />

      {/* Third Section (Our Service) */}
      <OurServiceSection />

      {/* Fourth Section (Our Gallery) */}
      <OurGallerySection />

      {/* {Footer Section} */}
      <Footer />
    </div>
  );
};

export default WeddingPlannerPage;
