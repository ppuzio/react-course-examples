import React from 'react';
import { SearchBarWrapper } from './SearchBar.css';

const SearchBar = ({ returnValue }) => {
  const handleChange = e => {
    returnValue(e.target.value);
  };

  return <SearchBarWrapper onChange={handleChange} />;
};

export default SearchBar;
