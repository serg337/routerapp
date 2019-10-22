import React, { useContext } from "react";
import Navigation from "../components/navigation";
import messageContext from "../context/messageContext";
import Outer from "../components/Outer";

function About() {
  return (
    <div>
      <Navigation />
      <h1>About Page</h1>
      <h2>Message: {useContext(messageContext)}</h2>
      <Outer></Outer>
    </div>
  );
}

export default About;
