import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../store/context-recipe";
import { Recipe } from "../components";
import { Loading, Error } from "../components";
import { paginate, RES_PER_PAGE } from "../config";

const Home = () => {
  const {
    recipes,
    isLoading,
    error: { msg, status },
  } = useRecipeContext();

  const [page, setPage] = useState(1);
  const { recipesPerPage, numberOfPages: pages } = paginate(recipes, page);

  const pageHandler = (e) => {
    const btnType = e.target.name;
    setPage((prevPage) => {
      if (btnType === "increase") {
        return prevPage + 1;
      }
      if (btnType === "decrease") {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const buttons = (
    <>
      <button name="decrease" className="btn btn__page" onClick={pageHandler}>
        Page {page - 1}
      </button>
      <button name="increase" className="btn btn__page" onClick={pageHandler}>
        Page {page + 1}
      </button>
    </>
  );
  useEffect(() => {
    setPage(1);
  }, [recipes]);

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
            {recipesPerPage.map((recipe) => {
              console.log(recipe);
              const { id, title, image_url: url, publisher } = recipe;
              const newRecipe = { id, title, url, publisher };
              return <Recipe key={id} {...newRecipe} />;
            })}
          </ul>
          <div className="pagination">
            {page === 1 && (
              <button
                name="increase"
                className="btn btn__page btn__page-right"
                onClick={pageHandler}
              >
                Page {page + 1}
              </button>
            )}
            {page === pages && (
              <button
                name="decrease"
                className="btn btn__page"
                onClick={pageHandler}
              >
                Page {page - 1}
              </button>
            )}
            {page > 1 && page < pages && buttons}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
