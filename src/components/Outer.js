import React, { useContext } from "react";
import Inner from "./Inner";
import messageContext from "../context/messageContext";

function Outer() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <div>
      <h2>Outer: {useContext(messageContext)}</h2>
      <Inner></Inner>
    </div>
  );
}

export default Outer;
