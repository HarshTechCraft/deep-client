import React from "react";
import "../style/Events.css";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

const Events = () => {
  const location = useLocation();
  const { searchData , event , locations} = location.state || [];
  console.log("hello" , searchData.length);
  const navigate = useNavigate();

  const handleCardClick = (event) => {
    navigate('/events/event-info',{state:{event : event}})
  };

  return (
    <div className="container">
      <Header />
      <div className="events-header">
        <h2>{searchData.length} {event}  spaces near {locations}</h2>
      </div>
      <hr></hr>
      <div className="events-container" >
        {searchData.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleCardClick(event)}
          >
            <div className="event-image">
              <img src={event.image} alt={event.activity} />
            </div>
            <div className="event-info">
              <h6 className="event-hotel">{event.hotel}</h6>
              <hr/>
              <h3 className="event-title">{event.activity}</h3>
              <div className="event-rating">
                <span>⭐ {event.rating}</span>
                <span> ({event.reviews})</span>
                <span> · {event.guests} guests</span>
              </div>
              {event.instantBook && (
                <div className="instant-book">Instant Book</div>
              )}
              <div className="event-price">From ₹{event.price}/hr</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
