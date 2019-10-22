import React, { useState } from "react";

import Navigation from "../components/navigation";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  function loginHandle() {
    setLoggedIn(!loggedIn);
  }
  return (
    <div>
      <Navigation />
      <h1>Home Page</h1>
      <button onClick={loginHandle}>{loggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Home;
