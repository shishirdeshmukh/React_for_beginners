import { ChildComp } from "./ChildComponent";
import React from "react";

export const ParentComp = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent ${childName}`);
  };

  return <ChildComp greethandler={greetParent} />;
};
