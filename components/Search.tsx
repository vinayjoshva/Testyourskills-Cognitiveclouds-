import React from 'react';
import './Search.css';

const Search = ({somethingChanged}: any) => {
  return (
    <div>
      <input type="text" id="searchBox" placeholder="Search" onChange = {somethingChanged}/>
    </div>
  );
};

export default Search;