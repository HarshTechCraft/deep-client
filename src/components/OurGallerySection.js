// OurGallerySection.js
import React from "react";
import "../style/OurGallerySection.css"; // Import the CSS file
import galleryImage6 from "../images/gallery-image1.png"; // Replace with actual image paths
import galleryImage7 from "../images/gallery-image3.png";
import galleryImage4 from "../images/gallery-image4.png";
import galleryImage5 from "../images/gallery-image5.png";
import galleryImage3 from "../images/gallery-image6.png";
import galleryImage1 from "../images/gallery-image7.png";
import galleryImage2 from "../images/gallery-image8.png";

const OurGallerySection = () => {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div className="decorative-element"></div>
        <h2 className="gallery-heading">Our Gallery</h2>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className={`gallery-item gallery-item-${index + 1}`}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurGallerySection;
