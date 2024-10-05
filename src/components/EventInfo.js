import React from 'react';
import "../style/Eventinfo.css"
import image1 from '../images/dummy_image1.jpg'
import image2 from '../images/dummy_image2.jpg'
import image3 from '../images/dummy_image3.jpg'
import image4 from '../images/dummy_image4.jpg'
import Header from './Header';
import { useLocation } from 'react-router-dom';

function EventInfo() {

  const location = useLocation();

    const { event } = location.state || [];

    console.log("hello", event)
  const images = [
    image1,
    image2,
    image3,
    image4,
  ];

  return (

    <div className='container'>
        <Header/>
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

      <div className="event-actions">
        <button className="share-btn">Share</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
    </div>
  );
}

export default EventInfo;
