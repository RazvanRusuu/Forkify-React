import React from "react";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <li className="preview">
      <Link to={`/recipe/${props.id}`} className=" link preview__link">
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
