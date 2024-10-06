import React from 'react';
import '../style/Section1.css';
import image1 from '../images/homePage1.jpeg';  // Replace with actual image paths
import image2 from '../images/homePage2.jpeg';
import image3 from '../images/homePage3.jpeg';

function Section1() {
  return (
    <div className="section1-container">
      <div className="section1-images">
        <img src={image1} alt="Pool view" className="section1-image" />
        <img src={image2} alt="Vintage Sofa" className="section1-image center-image" />
        <img src={image3} alt="Dining setup" className="section1-image" />
      </div>
      <div className="section1-text">
        <p className="section1-subtitle">Announcing the 2024</p>
        <h1 className="section1-title">OPEN DOOR AWARDS</h1>
        <a href="/" className="section1-link">Discover the best in space rentals →</a>
      </div>
    </div>
  );
}

export default Section1;
