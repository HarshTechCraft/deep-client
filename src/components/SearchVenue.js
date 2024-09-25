import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import '../style/SearchForm.css'; // Import your custom CSS

const SearchVenue = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

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
      setSelectedSuggestion(''); // Clear selection when input is empty
    }
  }, [inputValue]);

  const handleSelect = (suggestion) => {
    setInputValue(suggestion); // Update input value on selection
    setSelectedSuggestion(suggestion);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <div className="search-container">
      <Form className="search-form">
        <div className="input-group">
          <label htmlFor="activity">What are you planning?</label>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedSuggestion || "Select Activity"} // Display selected activity or placeholder
            onSelect={handleSelect}
          >
            {suggestions.map((suggestion, index) => (
              <Dropdown.Item key={index} eventKey={suggestion}>
                {suggestion}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {/* Consider adding a custom "Add New" option if applicable */}
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
      </Form>

      {/* Display filtered suggestions below the dropdown if needed */}
      {showSuggestions && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchVenue;