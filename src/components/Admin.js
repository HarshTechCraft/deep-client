import axios from "axios";
import React, { useState } from "react";
import "../style/Admin.css";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";

function Admin() {
  const [formData, setFormData] = useState({
    activity: "",
    eventType: "",
    location: "",
    date: "",
    hotel: "",
    duration: "",
    price: "",
    guests: "",
    facilities: [], // Initialize as an empty array
    aboutSpace: "",
    organizerName: "",
    organizerContact: "",
    image: null,
    code: "",
  });

  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }

    // Reset the file input field after successful form submission
    // e.target.value = null;
  };

  // Function to validate form fields
  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      console.log(value);
      if (
        key === "facilities" &&
        (value.length === 0 || value.some((facility) => facility.trim() === ""))
      ) {
        return false; // Invalid if facilities is empty or contains blank items
      }
      if (key === "image" && !value) {
        console.log("facilities array empty");

        return false; // Invalid if image is not provided
      }
      if (key !== "facilities" && key !== "image" && !value) {
        console.log("facilities array ", value);

        return false; // Invalid for other empty fields
      }
    }
    return true; // All fields are valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm()) {
      toast.error("Please fill in all fields before submitting.", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.post(`${url}/admin`, formData);
      console.log("Response:", response.data);
      toast.success("Form submitted successfully!", { position: "top-center" });
      setFormData({
        activity: "",
        eventType: "",
        location: "",
        date: "",
        hotel: "",
        duration: "",
        price: "",
        guests: "",
        facilities: [],
        aboutSpace: "",
        organizerName: "",
        organizerContact: "",
        image: null,
        code: "",
      });
    } catch (error) {
      console.error("Error during admin insertion:", error);
      toast.error("Error submitting form. Please try again.", {
        position: "top-center",
      });
    }

    console.log("Form Data Submitted:", formData);
  };
  const handleFacilitiesChange = (e) => {
    const value = e.target.value;
    const facilitiesArray = value.split(",").map((facility) => facility.trim());
    setFormData((prevData) => ({
      ...prevData,
      facilities: facilitiesArray,
    }));
  };
  return (
    <>
      <nav
        className={`navbar `}
        style={{ zIndex: "-1", backgroundColor: "black" }}
      >
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>
      </nav>
      <div className="admin-container " style={{ marginTop: "6em" }}>
        <ToastContainer />

        <form className="admin-form " onSubmit={handleSubmit}>
          {/* Row for Activity and Event Type */}
          <div className="form-row">
            <label>
              Event Type:
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="conference">Conference</option>
                <option value="party">Party</option>
                <option value="concert">Concert</option>
                <option value="festival">Festival</option>
                <option value="corporate_meeting">Corporate Meeting</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="trade_show">Trade Show</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="exhibition">Exhibition</option>
                <option value="webinar">Webinar</option>
                <option value="networking_event">Networking Event</option>
                <option value="birthday_party">Birthday Party</option>
                <option value="graduation">Graduation</option>
                <option value="retirement_party">Retirement Party</option>
                <option value="baby_shower">Baby Shower</option>
                <option value="charity_event">Charity Event</option>
                <option value="product_launch">Product Launch</option>
                <option value="gala">Gala</option>
                <option value="award_ceremony">Award Ceremony</option>
                <option value="sports_event">Sports Event</option>
                <option value="religious_ceremony">Religious Ceremony</option>
                <option value="team_building">Team Building</option>
                <option value="class_reunion">Class Reunion</option>
              </select>
            </label>
            <label>
              Activity:
              <input
                type="text"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Row for Location and Date */}
          <div className="form-row">
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Row for Hotel and Event Duration */}
          <div className="form-row">
            <label>
              Hotel:
              <input
                type="text"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                placeholder="e.g., 6 PM - 11 PM"
                value={formData.duration}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Row for Event Price and Guests */}
          <div className="form-row">
            <label>
              Event Price/Budget(₹):
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </label>
            <label>
              Guests:
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Row for About Space */}
          <div className="form-row">
            <label className="full-width">
              About Space:
              <textarea
                name="aboutSpace"
                value={formData.aboutSpace}
                onChange={handleChange}
                placeholder="Describe the space..."
              />
            </label>
          </div>

          {/* Row for Organizer Details */}
          <div className="form-row">
            <label>
              Organizer Name:
              <input
                type="text"
                name="organizerName"
                value={formData.organizerName}
                onChange={handleChange}
              />
            </label>
            <label>
              Organizer Contact:
              <input
                type="text"
                name="organizerContact"
                value={formData.organizerContact}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Row for Image Upload */}
          <div className="form-row">
            <label>
              Facilities (comma-separated) :
              <input
                type="text"
                name="facilities"
                onChange={handleFacilitiesChange}
                placeholder=""
                value={formData.facilities}
              />
            </label>
            <label>
              Image:
              <input type="file" name="image" onChange={handleImageUpload} />
            </label>
          </div>

          {/* Row for Captcha and Submit */}
          <div className="captcha-and-submit">
            <input
              name="code"
              type="text"
              placeholder="Enter code"
              className="captcha-input"
              value={formData.code}
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Admin;
