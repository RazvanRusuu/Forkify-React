import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Recipe } from "../components";
import { Loading, Error } from "../components";
import { paginate } from "../config";
import { useRecipeContext } from "../store/context-recipe";

const RecipesList = (props) => {
  const [activeRecipe, setActiveRecipe] = useState("");

  const activeRecipeHandler = (id) => {
    setActiveRecipe(id);
  };

  return (
    <>
      <ul className="preview__list">
        {props.recipes.map((recipe) => {
          const { id, title, image_url: url, publisher } = recipe;
          const newRecipe = { id, title, url, publisher };
          return (
            <Recipe
              key={id}
              {...newRecipe}
              onClick={activeRecipeHandler}
              className={id === activeRecipe ? "active" : ""}
            />
          );
        })}
      </ul>
    </>
  );
};

export default RecipesList;
