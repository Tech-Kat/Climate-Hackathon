import React from "react";
import { Link } from "react-router-dom";
import Logo from "../lightLogo.png";

const Nav = () => {
  return (
<div className="Nav">
      <h1>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </h1>
      <div className="nav-btns">
        <button className="nav-btn">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/survey" className="nav-link">
            Survey
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/facts" className="nav-link">
            Facts
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
