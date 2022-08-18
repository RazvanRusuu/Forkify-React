import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../assets/SVG/search.svg";
import { useRecipeContext } from "../store/context-recipe";

const SearchForm = () => {
  const { onChangeHandler, changedSearchedState } = useRecipeContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // avoid rendering spinner for first mount
    changedSearchedState();
    setSearchParams(`search=${inputRef.current.value}`);
    onChangeHandler(inputRef.current.value);

    inputRef.current.value = "";
  };

  return (
    <form action="" className="search" onSubmit={onSubmitHandler}>
      <input
        ref={inputRef}
        type="text"
        className="search__input"
        placeholder="Search recipe..."
      />
      <button type="submit" className="btn btn-search">
        <SearchIcon className="search__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
