import "../style/imageSlider.css";
import image1 from "../images/image3.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image1.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import img from "../images/home.jpg";

import React, { useState, useEffect } from "react";

const images = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(null);

  useEffect(() => {
    setAutoSlide(setInterval(() => nextSlide(), 6000));
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(autoSlide);
  };

  return (
    <div className="fixed-section">
      <div className="slider image-slider items">
        {/* <ul className="items">
        {images.map((img, index) => (
          <li
            key={index}
            className={`item ${index === currentIndex ? "current" : ""}`}
          >
            <img src={img} />
          </li>
        ))}
      </ul> */}
        <img src={img} className="sdcvbk" />
      </div>
    </div>
  );
};

export default ImageSlider;
