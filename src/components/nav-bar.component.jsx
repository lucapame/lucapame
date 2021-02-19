import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-light ">
        <Link to="/" className="unstyled-link ">
          <div className="logo">
            <p className="fw-bold m-0">LUIS C.</p>
            <p className="fw-bold m-0">PARRA</p>
          </div>
        </Link>
        <div className="links d-flex">
          <NavLink
            className=" m-0 pe-5 link"
            to="/contact"
            activeClassName="link-selected"
          >
            Contact
          </NavLink>
          <NavLink
            className=" m-0  link"
            to="/resume"
            activeClassName="link-selected"
          >
            Resumé
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
