import React, { Component } from 'react';
import './search.css';


const SearchComponent = (props) => (
    <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" onChange={props.handleFilter} />
);

export default SearchComponent;
