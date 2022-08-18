import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../store/context-recipe";
import Loading from "./Loading";
import Error from "./Error";

const RecipeDetails = () => {
  const {
    fetchSingleRecipe,
    singleRecipeLoading,
    searched,
    singleRecipeError: { msg, status },
  } = useRecipeContext();
  const { recipeId } = useParams();

  const { recipe } = useRecipeContext();

  useEffect(() => {
    if (!recipeId) return;
    fetchSingleRecipe(recipeId);
  }, [recipeId]);

  if (singleRecipeLoading && !recipe) {
    return <Loading />;
  }

  if (!recipe && !searched && !status) {
    return <Error msg="Start by searching for a recipe or an ingredient!" />;
  }

  if (status) {
    return <Error msg="Could not find that recipe! Try again!" />;
  }

  return <section className="recipe__details">RecipeDetails</section>;
};

export default RecipeDetails;
