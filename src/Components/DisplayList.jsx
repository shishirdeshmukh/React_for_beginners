import React from "react";

function DisplayList() {
  const names = ["john", "brice", "harry"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
}

export default DisplayList;
