import React from "react";
import { Link } from "react-router-dom";
import Logo from "../lightLogo.png";

const Nav = () => {
  return (
    <div className="flex">
      <h1>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </h1>
        <div className="nav-align">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/facts">Facts</Link>
        </button>
        <button>
          <Link to="/resources">Resources</Link>
        </button>
        <button>
          <Link to="/survey">Survey</Link>
        </button></div>

    </div>
  );
};

export default Nav;
