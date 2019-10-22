import React, { useState, useContext } from "react";

import Navigation from "../components/navigation";
import messageContext from "../context/messageContext";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  function loginHandle() {
    setLoggedIn(!loggedIn);
  }
  return (
    <div>
      <Navigation />
      <h1>Home Page</h1>
      <h2>Context Message: {useContext(messageContext)}</h2>
      <button onClick={loginHandle}>{loggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Home;
