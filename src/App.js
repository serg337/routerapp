import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/user/:username"
            render={({ match }) => {
              return <h1>Welcome {match.params.username}</h1>;
            }}
          />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
