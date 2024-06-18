import React from "react";
import SecondChild from "./SecondChild";

function FirstChild(props) {
  return (
    <div>
      <SecondChild secondhandler={props.handler} />
    </div>
  );
}

export default FirstChild;
