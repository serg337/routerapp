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
          activeStyle={{ color: "red" }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="App-link" to="about" activeStyle={{ color: "red" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="App-link" to="user" activeStyle={{ color: "red" }}>
          User
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
