import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/SearchForm.css";
import AutoSuggestion from "./AutoSuggestion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Loader } from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchVenue = () => {
  const [inputValue, setInputValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  const predefinedKeywords = [
    "Auditorium",
    "Anniversary",
    "Award Ceremony",
    "Baby Shower",
    "Banquet",
    "Bridal Shower",
    "Catering Event",
    "Christmas Party",
    "Class Reunion",
    "Cultural Festival",
    "Dance Competition",
    "Dinner Party",
    "Family Gathering",
    "Fashion Show",
    "Food Festival",
    "Market Fair",
    "Picnic",
    "Product Launch",
    "Retirement Party",
    "Sporting Event",
    "Team Building Activity",
    "Themed Party",
    "Trade Show",
    "Valentine's Day Event",
    "Wedding",
    "Workshop",
    "Yoga Retreat",
  ];

  const predefinedLocations = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Gandhinagar",
    "Junagadh",
    "Anand",
    "Morbi",
    "Porbandar",
    "Bhuj",
    "Gondal",
    "Veraval",
    "Amreli",
    "Jetpur",
  ];

  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loader]);

  const getResult = async (e) => {
    setLoader(true);
    e.preventDefault();

    if (!inputValue.trim() || !locationValue.trim()) {
      setLoader(false);
      toast.error("Please fill in all fields before searching!");
      return;
    }

    // const formattedDate = dateValue.toISOString().split("T")[0];
    console.log(inputValue + " " + locationValue);

    try {
      const response = await axios.post(`${url}/venuesearch`, {
        inputValue,
        locationValue,
        // formattedDate,
      });

      console.log(response.data.results.length);
      setLoader(false);
      if (response.data.results.length === 0) {
        toast.info("No events found");
      } else {
        navigate("/events", {
          state: {
            searchData: response.data.results,
            event: inputValue,
            locations: locationValue,
          },
        });
      }
    } catch (error) {
      console.error("Error during search venue:", error);
      setLoader(false);
    }
  };

  // IntersectionObserver to trigger the animations when in view
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

    const inputElements = document.querySelectorAll(".input-group");
    inputElements.forEach((input) => {
      observer.observe(input);
    });

    const buttonElement = document.querySelector(".search-button");
    observer.observe(buttonElement);

    return () => {
      inputElements.forEach((input) => {
        observer.unobserve(input);
      });
      observer.unobserve(buttonElement);
    };
  }, []);

  return (
    <>
      {loader ? <Loader /> : ""}
      <ToastContainer />
      <div className="search-container">
        {/* Header Section */}
        <div className="search-header">
          <h1>Find the Perfect Venue for Your Special Occasion</h1>
          <p>
            Browse through top-rated venues to make your event unforgettable.
          </p>
        </div>

        {/* Search Form */}
        <form className="search-form" onSubmit={getResult}>
          <div className="input-group left-side">
            <AutoSuggestion
              inputValue={inputValue}
              setInputValue={setInputValue}
              predefinedKeywords={predefinedKeywords}
              placeHolder="Enter activity"
            />
          </div>
          <div className="input-group zindex_-1 right-side">
            <AutoSuggestion
              inputValue={locationValue}
              setInputValue={setLocationValue}
              predefinedKeywords={predefinedLocations}
              placeHolder="Enter Place"
            />
          </div>
          <div className="input-group zindex-minus  w-0">
            <button type="submit" className="search-button">
              Search ➔
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchVenue;
