import React from "react";
import { ReactComponent as Checkmark } from "../assets/SVG/checkmark.svg";
import fracty from "fracty";
const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="recipe__ingredients">
      <h3 className="heading-tertiary">Recipe Ingredients</h3>

      <ul className="recipe__list">
        {ingredients.map((ing, index) => {
          const { description, quantity, unit } = ing;
          return (
            <li key={index} className="recipe__ingredient">
              <Checkmark className="recipe__icon" />
              <span>{+quantity ? fracty(quantity) : ""}</span>
              <span>{unit}</span>
              <span>{description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
