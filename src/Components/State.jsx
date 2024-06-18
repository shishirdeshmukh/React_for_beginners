import React from "react";
import { useState } from "react";

function State() {
  const [message, setMessage] = useState("Welcome Frosty");
  return (
    <>
      <h1>{message} </h1>
      <button onClick={() => setMessage("Thank you")}>Change</button>
    </>
  );
}

export default State;
