import React from "react";

function Greet(props) {
  return (
    <>
      <h1>
        Hello {props.name} aka {props.hero}
      </h1>
      {props.children}
    </>
  );
}

export default Greet;
