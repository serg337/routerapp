import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink
          exact
          className="App-link"
          to="/"
          activeClassName="Active-link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="App-link" to="about" activeClassName="Active-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="App-link" to="user" activeClassName="Active-link">
          User
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
