import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Recipe } from "../components";
import { Loading, Error } from "../components";
import { paginate } from "../config";
import { useRecipeContext } from "../store/context-recipe";

const RecipesList = () => {
  const {
    recipes,
    isLoading,
    searched,
    onChangeHandler,
    error: { msg, status },
  } = useRecipeContext();

  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search");

  const { recipesPerPage, numberOfPages: pages } = paginate(recipes, page);

  const prevPageHandler = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const nextPageHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const buttons = (
    <>
      <button className="btn btn__page" onClick={prevPageHandler}>
        Page {page - 1}
      </button>
      <button className="btn btn__page" onClick={nextPageHandler}>
        Page {page + 1}
      </button>
    </>
  );

  useEffect(() => {
    setPage(1);
  }, [recipes]);

  useEffect(() => {
    onChangeHandler(query);
  }, [query]);

  if (isLoading && searched) {
    return <Loading />;
  }

  if (status || (recipes.length === 0 && searched)) {
    return <Error msg={msg} />;
  }

  return (
    <>
      <ul className="recipe__list">
        {recipesPerPage.map((recipe) => {
          const { id, title, image_url: url, publisher } = recipe;
          const newRecipe = { id, title, url, publisher };
          return <Recipe key={id} {...newRecipe} />;
        })}
      </ul>
      <div className="pagination">
        {page === 1 && pages > 1 && (
          <button
            className="btn btn__page btn__page-right"
            onClick={nextPageHandler}
          >
            Page {page + 1}
          </button>
        )}
        {page === pages && (
          <button className="btn btn__page" onClick={prevPageHandler}>
            Page {page - 1}
          </button>
        )}
        {page > 1 && page < pages && buttons}
      </div>
    </>
  );
};

export default RecipesList;
