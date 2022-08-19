import React, { useEffect, useState } from "react";
import { RecipesList, RecipeDetails, RecipesContainer } from "../components";

const Home = () => {
  return (
    <main className="main">
      <div className="container container__recipes grid">
        <aside className="recipes__list-container">
          <RecipesContainer />
        </aside>
        <RecipeDetails />
      </div>
    </main>
  );
};

export default Home;
