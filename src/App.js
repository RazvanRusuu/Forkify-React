import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Bookmark, NoPage, SingleRecipe, AddRecipe } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/:recipeId" element={<SingleRecipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
