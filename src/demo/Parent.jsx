import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

function Parent() {
  const greetParent = () => {
    alert("hello parent");
  };

  return <FirstChild handler={greetParent} />;
}

export default Parent;
