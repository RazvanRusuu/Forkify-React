const recipeReducer = (state, action) => {
  if (action.type === "SEARCH") {
    return { ...state, query: action.payload };
  }

  if (action.type === "LOAD_RECIPES") {
    return { ...state, isLoading: true, error: { msg: "", status: false } };
  }

  if (action.type === "RECIPES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      recipes: [...action.payload],
      error: { msg: "", status: false },
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      isLoading: false,
      error: { msg: action.payload, status: true },
    };
  }
  return state;
};

export default recipeReducer;
