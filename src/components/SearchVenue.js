import React, { useState } from 'react';
import '../style/SearchForm.css';

const SearchVenue = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-group">
          <label htmlFor="activity">What are you planning?</label>
          <input type="text" id="activity" placeholder="Enter your activity" />
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
          <button type="submit" className="search-button">Search ➔</button>
        </div>
      </form>
    </div>
  );
};

export default SearchVenue;