import React, { useState } from 'react';
import "../style/AutoSuggestion.css";

function AutoSuggestion({ inputValue, setInputValue, predefinedKeywords , placeHolder}) {
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        
        if (value.length > 0) {
            const filteredSuggestions = predefinedKeywords.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (value) => {
        setInputValue(value);  
        setSuggestions([]);    
    };

    return (
      <div className="autocomplete-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        aria-autocomplete="list"
        aria-controls="autocomplete-list"
        placeholder={placeHolder}
      />
      {suggestions.length > 0 && (
        <ul id="autocomplete-list" className="suggestions-list" role="listbox">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              role="option"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    
    );
}

export default AutoSuggestion;
