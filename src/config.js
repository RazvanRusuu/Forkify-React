export const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
export const RES_PER_PAGE = 10;
export const KEY = "f6e45ea6-dd47-42c1-99ae-e837b33cf19b";

export const paginate = (recipes, page) => {
  const numberOfPages = Math.ceil(recipes.length / RES_PER_PAGE);
  const recipesPerPage = recipes.slice(
    (page - 1) * RES_PER_PAGE,
    RES_PER_PAGE * page
  );

  return { recipesPerPage, numberOfPages };
};
