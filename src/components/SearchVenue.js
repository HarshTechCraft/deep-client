import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../style/SearchForm.css';

const SearchVenue = () => {
  const [inputValue, setInputValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const predefinedKeywords = [
    'keyword1',
    'keyword2',
    'keyword3',
  ];

  useEffect(() => {
    if (inputValue.length > 0) {
      const filteredSuggestions = predefinedKeywords.filter(keyword =>
        keyword.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const getResult = (e) => {
    e.preventDefault(); // Prevent form submission
    setSubmitted(true); // Set submitted state to true

    // Check if any fields are empty
    if (!inputValue.trim() || !locationValue.trim() || !dateValue.trim()) {
      return; // Exit the function if any fields are empty
    }

    navigate('/events'); // Redirect to the /events page
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={getResult}>
        <div className="input-group">
          <label htmlFor="activity">What are you planning?</label>
          <input
            type="text"
            id="activity"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your activity"
            style={{
              borderColor: submitted && !inputValue.trim() ? 'red' : '',
            }} // Conditional border color
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Where?</label>
          <input
            type="text"
            id="location"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="Enter a city or address"
            style={{
              borderColor: submitted && !locationValue.trim() ? 'red' : '',
            }} // Conditional border color
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">When?</label>
          <input
            type="text"
            id="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            placeholder="Anytime"
            style={{
              borderColor: submitted && !dateValue.trim() ? 'red' : '',
            }} // Conditional border color
          />
        </div>
        <div className="input-group">
          <button type="submit" className="search-button">
            Search ➔
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchVenue;
