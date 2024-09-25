import React, { useEffect, useState } from 'react';
import '../style/SearchForm.css';

const SearchVenue = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-group">
          <label htmlFor="activity">What are you planning?</label>
          <input
            type="text"
            id="activity"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your activity"
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Where?</label>
          <input type="text" id="location" placeholder="Enter a city or address" />
        </div>
        <div className="input-group">
          <label htmlFor="date">When?</label>
          <input type="text" id="date" placeholder="Anytime" />
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