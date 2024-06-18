import React from "react";

function ConditionalRenderinf() {
  const isLoggedIn = false;

  //return <div>Welcome{isLoggedIn ? " Frosty" : " Guest"}</div>;
  return <div>Welcome{isLoggedIn && " Frosty"}</div>;
}

export default ConditionalRenderinf;
