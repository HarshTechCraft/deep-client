import React from "react";
import "../style/Venues.css";
import img1 from "../images/venues1.jpeg";
import img2 from "../images/venues2.jpeg";
import img3 from "../images/venues3.jpeg";
import img4 from "../images/venues4.jpeg";
import img5 from "../images/venues5.jpeg";
import img6 from "../images/venues6.jpeg";
import img7 from "../images/venues7.jpeg";
import img8 from "../images/venues8.jpeg";
import img9 from "../images/venues9.jpeg";
import Header from "./Header";

const Venues = () => {
  const venueData = [
    {
      name: "Opulence by Bhullar",
      location: "Zirakpur",
      type: "Banquet Halls, Marriage Garden",
      vegPrice: "1,700",
      nonVegPrice: "1,900",
      capacity: "325-700",
      rooms: "2",
      image: img1,
    },
    {
      name: "GITAI Lawns / Banquet",
      location: "Lohegaon, Pune",
      type: "Banquet Halls, Marriage Garden",
      vegPrice: "849",
      nonVegPrice: "949",
      capacity: "100-2000",
      rooms: "Indoor",
      image: img2,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img3,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img4,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img5,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img6,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img7,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img8,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img9,
    },
    {
      name: "Opulence by Bhullar",
      location: "Zirakpur",
      type: "Banquet Halls, Marriage Garden",
      vegPrice: "1,700",
      nonVegPrice: "1,900",
      capacity: "325-700",
      rooms: "2",
      image: img1,
    },
    {
      name: "GITAI Lawns / Banquet",
      location: "Lohegaon, Pune",
      type: "Banquet Halls, Marriage Garden",
      vegPrice: "849",
      nonVegPrice: "949",
      capacity: "100-2000",
      rooms: "Indoor",
      image: img2,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img3,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img4,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img5,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img6,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img7,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img8,
    },
    {
      name: "Holiday Inn Jaipur",
      location: "C Scheme, Jaipur",
      type: "4 Star & Above Wedding Hotels",
      vegPrice: "2,200",
      nonVegPrice: "2,500",
      capacity: "35-1500",
      rooms: "172",
      image: img9,
    },
  ];

  return (
    <div className="Venues mt-5">
      <div className="venue-listing-container">
        <Header />
        {venueData.map((venue, index) => (
          <div key={index} className="venue-listing-card">
            <div className="venue-listing-image">
              <img src={venue.image} alt={venue.name} />
            </div>
            <div className="venue-listing-details">
              <h3>{venue.name}</h3>
              <p className="venue-listing-location">{venue.location}</p>
              <p className="venue-listing-type">{venue.type}</p>
              <div className="venue-listing-pricing">
                <span>Veg: ₹{venue.vegPrice} per plate</span>
                <span>Non-Veg: ₹{venue.nonVegPrice} per plate</span>
              </div>
              <div className="venue-listing-capacity">
                <span>{venue.capacity} pax</span>
                <span>{venue.rooms} Rooms</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
