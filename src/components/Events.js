import React, { useEffect, useState } from "react";
import "../style/Events.css"; // Assume you have CSS styling here for your layout
import events from "../JSON/Events.json";
import Header from "./Header";

const Events = () => {
  return (
    <div className="container">
      <Header/>  
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
           
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
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
