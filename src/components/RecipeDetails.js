import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../store/context-recipe";

const RecipeDetails = () => {
  const { fetchSingleRecipe } = useRecipeContext();
  const { recipeId } = useParams();

  const { recipe } = useRecipeContext();

  useEffect(() => {
    fetchSingleRecipe(recipeId);
  }, [recipeId]);
  return <section className="recipe__details">RecipeDetails</section>;
};

export default RecipeDetails;
