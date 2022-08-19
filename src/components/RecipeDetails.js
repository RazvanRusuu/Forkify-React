import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Clock } from "../assets/SVG/clock.svg";
import { ReactComponent as Man } from "../assets/SVG/man.svg";
import { ReactComponent as Minus } from "../assets/SVG/minus.svg";
import { ReactComponent as Plus } from "../assets/SVG/plus.svg";
import { ReactComponent as Bookmark } from "../assets/SVG/bookmark-empty.svg";
import { ReactComponent as BookmarkFill } from "../assets/SVG/bookmarks.svg";

import { useRecipeContext } from "../store/context-recipe";
import Loading from "./Loading";
import Error from "./Error";
import RecipeIngredients from "./RecipeIngredients";

const RecipeDetails = () => {
  const {
    fetchSingleRecipe,
    singleRecipeLoading,
    searched,
    singleRecipeError: { msg, status },
    handleServings,
    recipe,
    addToBookmarksHandler,
    bookmark,
  } = useRecipeContext();
  const { recipeId } = useParams();
  const bookmarkedRecipe = bookmark.find((recipe) => recipe.id === recipeId);

  const increaseServingsHandler = () => {
    handleServings("increase");
  };

  const decreaseServingsHandler = () => {
    if (recipe.servings <= 1) return;
    handleServings("decrease");
  };

  const addToBookmarks = () => {
    addToBookmarksHandler(recipe);
  };

  useEffect(() => {
    if (!recipeId) return;
    fetchSingleRecipe(recipeId);
  }, [recipeId]);

  if (singleRecipeLoading) {
    return <Loading />;
  }

  if (!recipe && !searched && !status) {
    return <Error msg="Start by searching for a recipe or an ingredient!" />;
  }

  if (status) {
    return <Error msg="Could not find that recipe! Try again!" />;
  }
  if (!recipe) return;

  return (
    <section className="recipe">
      <figure className="recipe__figure">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="recipe__image"
        />
      </figure>
      <h1 className="recipe__title">
        <span>{recipe.title}</span>
      </h1>

      <div className="recipe__details">
        <div className="recipe__info">
          <Clock className="recipe__icon" />
          <span>{recipe.cooking_time} Minutes</span>
        </div>
        <div className="recipe__info">
          <Man className="recipe__icon" />
          <span>{recipe.servings} Servings</span>
          <button type="button" onClick={decreaseServingsHandler}>
            <Minus className="btn__icon" />
          </button>
          <button type="button" onClick={increaseServingsHandler}>
            <Plus className="btn__icon" />
          </button>
        </div>
      </div>

      <button className="btn btn-bookmark" onClick={addToBookmarks}>
        {bookmarkedRecipe ? (
          <BookmarkFill className="btn__icon" />
        ) : (
          <Bookmark className="btn__icon" />
        )}
      </button>

      <RecipeIngredients ingredients={recipe.ingredients} />
    </section>
  );
};

export default RecipeDetails;
