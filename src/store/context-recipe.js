import React, { useEffect } from "react";

import { useContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import { API_URL } from "../config";

const initial_state = {
  sidebar_open: false,
  isLoading: false,
  singleRecipeLoading: false,
  recipes: [],
  error: { msg: "", status: false },
  singleRecipeError: { msg: "", status: false },
  recipe: {},
  query: "pizza",
  bookmark: [],
};

const RecipeContext = React.createContext({
  onChangeHandler() {},
});

const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { query } = state;

  const loadRecipes = async (url) => {
    dispatch({ type: "LOAD_RECIPES" });

    try {
      const response = await fetch(`${url}?search=${query}`);

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();

      if (data.results === 0) throw new Error("No recipe found! Try again");

      dispatch({ type: "RECIPES_SUCCESS", payload: data.data.recipes });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const onChangeHandler = (query) => {
    dispatch({ type: "SEARCH", payload: query });
  };

  useEffect(() => {
    loadRecipes(API_URL);
  }, [query]);

  return (
    <RecipeContext.Provider value={{ ...state, onChangeHandler }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
