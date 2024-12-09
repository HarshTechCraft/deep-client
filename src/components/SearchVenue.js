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

    if (!inputValue.trim() || !locationValue.trim() || !dateValue) {
      setLoader(false);
      toast.error("Please fill in all fields before searching!");
      return;
    }

    const formattedDate = dateValue.toISOString().split("T")[0];
    console.log(inputValue + " " + locationValue + " " + formattedDate);

    try {
      const response = await axios.post(`${url}/venuesearch`, {
        inputValue,
        locationValue,
        formattedDate,
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
          <div className="input-group">
            <AutoSuggestion
              inputValue={inputValue}
              setInputValue={setInputValue}
              predefinedKeywords={predefinedKeywords}
              placeHolder="Enter your activity"
            />
          </div>
          <div className="input-group">
            <AutoSuggestion
              inputValue={locationValue}
              setInputValue={setLocationValue}
              predefinedKeywords={predefinedLocations}
              placeHolder="Enter your Place"
            />
          </div>
          <div className="input-group">
            <DatePicker
              selected={dateValue}
              onChange={(date) => setDateValue(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Enter your Date"
              isClearable
              className="date-picker"
            />
          </div>
          <div className="input-group z-1 w-0">
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
