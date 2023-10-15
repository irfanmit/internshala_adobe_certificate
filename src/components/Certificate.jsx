import React, { useState } from 'react';
import './Certificate.css'

function Certificate() {
  const [searchOption, setSearchOption] = useState('rollNo');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality here based on the selected search option and search value
    // You can make an API call or perform any other search logic
    console.log(`Searching for ${searchOption}: ${searchValue}`);
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <span>Adobe Skill Development Limited</span>
        </div>
      </nav>
      <div className="container">
        <h1 className="center-heading">Certificate Search</h1>
        <div className="search-options">
          <label>
            <input
              type="radio"
              value="rollNo"
              checked={searchOption === 'rollNo'}
              onChange={handleSearchOptionChange}
            />
            Roll Number
          </label>
          <label>
            <input
              type="radio"
              value="registrationNo"
              checked={searchOption === 'registrationNo'}
              onChange={handleSearchOptionChange}
            />
            Registration Number
          </label>
          <label>
            <input
              type="radio"
              value="serialNo"
              checked={searchOption === 'serialNo'}
              onChange={handleSearchOptionChange}
            />
            Serial Number
          </label>
        </div>
        <input
          type="text"
          placeholder={`Enter ${searchOption}...`}
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearch}>Search Certificate</button>
      </div>
    </div>
  );
}

export default Certificate;
