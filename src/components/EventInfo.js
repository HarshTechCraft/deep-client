import React, { useState } from "react";
import "../style/Eventinfo.css";
import image1 from "../images/dummy_image1.jpg";
import image2 from "../images/dummy_image2.jpg";
import image3 from "../images/dummy_image3.jpg";
import image4 from "../images/dummy_image4.jpg";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { FaStar, FaUser, FaClock } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function EventInfo() {
  const location = useLocation();
  const { event } = location.state || [];
  const [isFurnitureOpen, setIsFurnitureOpen] = useState(false);
  const [isAVOpen, setIsAVOpen] = useState(false);
  const [isParkingOpen, setIsParkingOpen] = useState(false);

  const toggleFurniture = () => setIsFurnitureOpen(!isFurnitureOpen);
  const toggleAV = () => setIsAVOpen(!isAVOpen);
  const toggleParking = () => setIsParkingOpen(!isParkingOpen);

  const images = [image1, image2, image3, image4];

  return (
    <div className="container">
      <Header />
      <div className="event-info-container">
        <div className="event-header">
          <h1>{event.hotel}</h1>
          <a href="/location-link">{event.location}</a>
        </div>

        <div className="event-gallery">
          <div className="main-image">
            <img src={images[0]} alt="Main event" />
          </div>

          <div className="gallery-thumbnails">
            {images.slice(1).map((image, index) => (
              <div key={index} className="thumbnail">
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="view-all">
            <button>View all</button>
          </div>
        </div>

        {/* Event details section */}
        <div className="event-details">
          <div className="event-rating">
            <FaStar /> <span>{event.rating}</span>
          </div>
          <div className="event-attendees">
            <FaUser /> <span>{event.reviews} people</span>
          </div>
          <div className="event-duration">
            <FaClock /> <span>1 hr</span>
          </div>
          <div className="event-book-now">
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
        <hr />
        {/* About the Space section */}
        <div className="about-space">
          <h2>About the Space</h2>
          <p>
            With sleek interiors and unparalleled service, this hotel is perfect
            for hosting high-end corporate meetings, product launches, and
            social events. The tech-friendly meeting rooms come with advanced
            audiovisual equipment and support services to ensure every event
            runs smoothly. The gourmet restaurant offers international cuisine
            crafted by top chefs, while the rooftop lounge serves creative
            cocktails with a view of the city. For networking events, the venue
            provides private spaces and VIP services to accommodate high-profile
            guests.
          </p>
        </div>

        {/* Additional Information - Collapsible Sections */}
        <div className="collapsible-section">
          {/* Furniture Section */}
          <div className="collapsible-header" onClick={toggleFurniture}>
            <span>Furniture</span>
            {isFurnitureOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isFurnitureOpen && (
            <div className="collapsible-content">
              <p>Details about the available furniture...</p>
            </div>
          )}

          {/* AV and Music Section */}
          <div className="collapsible-header" onClick={toggleAV}>
            <span>AV and Music</span>
            {isAVOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isAVOpen && (
            <div className="collapsible-content">
              <p>Details about AV and music equipment...</p>
            </div>
          )}

          {/* Parking Section */}
          <div className="collapsible-header" onClick={toggleParking}>
            <span>Parking</span>
            {isParkingOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isParkingOpen && (
            <div className="collapsible-content">
              <p>Details about parking availability...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
