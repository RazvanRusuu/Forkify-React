import React, { useCallback, useEffect } from "react";

import { useContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import { API_URL } from "../config";

const initial_state = {
  searched: false,
  sidebar_open: false,
  isLoading: false,
  singleRecipeLoading: false,
  recipes: [],
  error: { msg: "", status: false },
  singleRecipeError: { msg: "", status: false },
  recipe: null,
  query: "",
  bookmark: [],
};

const RecipeContext = React.createContext({
  onChangeHandler() {},
});

const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { query } = state;

  const loadRecipes = async (url) => {
    if (!query) return;
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

  const fetchSingleRecipe = async (id) => {
    dispatch({ type: "LOAD_SINGLE_RECIPE" });

    try {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();

      dispatch({ type: "SINGLE_RECIPE_SUCCESS", payload: data.data.recipe });
    } catch (err) {
      dispatch({ type: "SINGLE_RECIPE_ERROR", payload: err.message });
    }
  };

  // avoid rendering spinner for first mount
  const changedSearchedState = () => {
    dispatch({ type: "FIRST_SEARCH" });
  };

  const onChangeHandler = (query) => {
    dispatch({ type: "SEARCH", payload: query });
  };

  const handleServings = (type) => {
    dispatch({ type: "HANDLE_SERVINGS", payload: type });
  };

  const addToBookmarksHandler = (recipe) => {
    dispatch({ type: "ADD_BOOKMARK", payload: recipe });
  };

  useEffect(() => {
    loadRecipes(API_URL);
  }, [query]);

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        onChangeHandler,
        changedSearchedState,
        fetchSingleRecipe,
        handleServings,
        addToBookmarksHandler,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
