// OurServiceSection.js
import React from "react";
import "../style/OurServiceSection.css"; // Import the CSS file
import venueImage from "../images/venue-image.png"; // Replace with actual image paths
import receptionImage from "../images/reception-image.png";
import engagementImage from "../images/engagement-image.png";
import photographyImage from "../images/photography-image.png";

const OurServiceSection = () => {
  const services = [
    {
      title: "Wedding venue selection",
      description:
        "Choose a venue that fits your style, guest list, and budget. Book early the perfect day!",
      image: venueImage,
    },
    {
      title: "Wedding reception",
      description:
        "A night of dancing, laughter, and love—hopefully one the guests when you're getting married next!",
      image: receptionImage,
    },
    {
      title: "Engagement party organizer",
      description:
        "Find the perfect wedding attire—elegant, traditional, and stylish for your big day!",
      image: engagementImage,
    },
    {
      title: "Photography",
      description: "Capture your love story with stunning wedding photography!",
      image: photographyImage,
    },
  ];

  return (
    <section className="service-section">
      <h2 className="service-heading">Our Service</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">Book Service</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServiceSection;
