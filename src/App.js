import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

import messageContext from "./context/messageContext";

import "./App.css";

function App() {
  const [message, setMessage] = useState("I am being shared");
  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <div className="App">
          <header className="App-header">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
          </header>
        </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
