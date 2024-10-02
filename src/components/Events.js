import React, { useEffect, useState } from "react";
import "../style/Events.css";
import events from "../JSON/Events.json";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Events = ( ) => {


  const location = useLocation(); 
  const { searchData } = location.state || {}; 
  console.log("hello"+searchData)

  return (
    <div className="container">
      <Header/>  
      <div className="events-container">
        {searchData.map((event) => (
          <div key={event.id} className="event-card">
           <div className="event-image">
              <img src={event.image} alt={event.activity} />
            </div>
            <div className="event-info">
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
