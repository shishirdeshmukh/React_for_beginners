import React from "react";

function Greet(props) {
  return (
    <>
      <h1>
        Hello {props.name} aka {props.hero}
      </h1>
      <h2>{props.children}</h2>
    </>
  );
}

export default Greet;
