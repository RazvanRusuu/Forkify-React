import React, { useRef } from "react";
import { ReactComponent as SearchIcon } from "../assets/SVG/search.svg";
import { useRecipeContext } from "../store/context-recipe";

const SearchForm = () => {
  const { onChangeHandler } = useRecipeContext();

  const inputRef = useRef();

  const changeHandler = (e) => {
    onChangeHandler(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  return (
    <form action="" className="search" onSubmit={onSubmitHandler}>
      <input
        ref={inputRef}
        type="text"
        className="search__input"
        placeholder="Search recipe..."
        onChange={changeHandler}
      />
      <button type="button" className="btn btn-search">
        <SearchIcon className="search__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
