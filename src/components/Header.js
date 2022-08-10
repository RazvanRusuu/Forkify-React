import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/SVG/spoon-knife.svg";
import { ReactComponent as Bookmark } from "../assets/SVG/bookmarks.svg";
import { ReactComponent as Pencil } from "../assets/SVG/pencil.svg";

import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo-box">
            <div className="header__logo-box-icon">
              <Logo className="header__logo" />
            </div>
            <span className="header__logo-text">Forkify</span>
          </div>

          <SearchForm />

          <div className="header__recipe-box">
            <Link to={"/add-recipe"} className="link header__link">
              <Bookmark className="header__recipe-icon" />
              <span>Bookmark</span>
            </Link>
            <Link to={"/bookmark"} className="link header__link">
              <Pencil className="header__recipe-icon" />
              <span>Add Recipe</span>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
