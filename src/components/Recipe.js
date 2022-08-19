import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  // const [activeRecipe, setActiveRecipe] = useState(false);

  // const handlerActiveRecipe = (e) => {
  //   const clicked = e.target.closest(".link");
  //   console.log(props.id);
  // };

  return (
    <li className="preview">
      <Link
        to={`/recipe/${props.id}`}
        className={`link preview__link ${props.className}`}
        onClick={() => props.onClick(props.id)}
      >
        <figure className="preview__figure">
          <img src={props.url} alt={props.title} className="preview__img" />
        </figure>
        <div className="preview__title-box">
          <h4 className="preview__title">{props.title}</h4>
          <span className="preview__publisher">{props.publisher}</span>
        </div>
      </Link>
    </li>
  );
};

export default Recipe;
