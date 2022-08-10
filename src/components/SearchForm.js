import React from "react";
import { ReactComponent as SearchIcon } from "../assets/SVG/search.svg";

const SearchForm = () => {
  return (
    <form action="" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search recipe..."
      />
      <button type="button" className="btn btn-search">
        <SearchIcon className="search__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
