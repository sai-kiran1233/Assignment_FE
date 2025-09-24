import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const SearchBar = () => {
  const { searchTerm, updateSearchTerm } = useDashboard();

  const handleSearchChange = (e) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
