import React from "react";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../store/context-recipe";
import { Recipe } from "../components";
import { Loading, Error } from "../components";

const Home = () => {
  const {
    recipes,
    isLoading,
    error: { msg, status },
  } = useRecipeContext();

  if (isLoading) {
    return <Loading />;
  }

  if (status) {
    return <Error msg={msg} />;
  }

  return (
    <main className="main">
      <div className="container container__recipes grid">
        <aside className="recipes__list-container">
          <ul className="recipe__list">
            {recipes.map((recipe) => {
              const { id, title, image_url: url, publisher } = recipe;
              const newRecipe = { id, title, url, publisher };
              return <Recipe key={id} {...newRecipe} />;
            })}
          </ul>
          <div className="pagination">
            <button className="btn btn-page">Page 2</button>
            <button className="btn btn-page">Page 3</button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
