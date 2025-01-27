import React, { useEffect } from "react";
import "../style/GridPhotos.css";
import grid1 from "../images/grid1.jpeg";
import grid2 from "../images/grid2.jpeg";
import grid3 from "../images/grid8.jpeg";
import grid32 from "../images/grid32.jpeg";
import grid4 from "../images/grid42.jpeg";
import grid5 from "../images/grid5.jpeg";
import grid6 from "../images/grid7.png";
import grid7 from "../images/image5.jpg";

const GridPhotos = () => {
  const images = [grid3, grid4, grid1, grid2, grid5, grid6];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    const imageElements = document.querySelectorAll(".image");
    imageElements.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      imageElements.forEach((image) => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className="grid-container">
      <h2 className="ms-4">Wedding Categories</h2>
      <div className="image-grid">
        <div className="image image-1">
          <img src={grid2} alt="Image 2" />
          <div className="overlay">
            <div className="text">Mehndi Ceremonies</div>
          </div>
        </div>
        <div className="image image-2">
          <img src={grid32} alt="Image 2" />
          <div className="overlay">
            <div className="text" style={{ fontSize: "1em" }}>
              Beach Weddings
            </div>
          </div>
        </div>
        <div className="image image-3">
          <img src={grid5} alt="Image 2" />
          <img src={grid7} alt="Image 2" style={{ height: "100%" }} />
          <div className="overlay">
            <div className="text">Reception Decor</div>
          </div>
        </div>
        <div className="image image-4">
          <img src={grid4} alt="Image 2" style={{ height: "100%" }} />
          <div className="overlay">
            <div className="text">Reception Decor</div>
          </div>
        </div>
        <div className="image image-5">
          <img src={grid6} alt="Image 2" />
          <div className="overlay">
            <div className="text">Stage Decor</div>
          </div>
        </div>
        <div className="image image-6">
          <img src={grid1} alt="Image 2" />
          <div className="overlay">
            <div className="text" style={{ fontSize: "1em" }}>
              Traditional Weddings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPhotos;
