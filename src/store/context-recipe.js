import React from "react";

import { useContext, useReducer } from "react";
import reducer from "../reducer/reducer";

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

const RecipeContext = React.createContext({});

const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  return (
    <RecipeContext.Provider value={{ ...state }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
