const recipeReducer = (state, action) => {
  if (action.type === "FIRST_SEARCH") {
    return { ...state, searched: true };
  }
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
  if (action.type === "LOAD_SINGLE_RECIPE") {
    return {
      ...state,
      singleRecipeLoading: true,
      singleRecipeError: { msg: "", status: false },
    };
  }

  if (action.type === "SINGLE_RECIPE_SUCCESS") {
    return {
      ...state,
      singleRecipeLoading: false,
      singleRecipeError: { msg: "", status: false },
      recipe: { ...action.payload },
    };
  }

  if (action.type === "SINGLE_RECIPE_ERROR") {
    return {
      ...state,
      singleRecipeLoading: false,
      singleRecipeError: { msg: action.payload, status: true },
    };
  }

  if (action.type === "HANDLE_SERVINGS") {
    const {
      recipe: { servings },
    } = state;
    const newServings = state.recipe.ingredients.map((ing) => {
      const quantityPerServing = Number(ing.quantity / servings);

      const newQuantity =
        action.payload === "decrease"
          ? ing.quantity - quantityPerServing
          : ing.quantity + quantityPerServing;
      return { ...ing, quantity: newQuantity };
    });

    return {
      ...state,
      recipe: {
        ...state.recipe,
        ingredients: newServings,
        servings: action.payload === "decrease" ? servings - 1 : servings + 1,
      },
    };
  }
  return state;
};

export default recipeReducer;
