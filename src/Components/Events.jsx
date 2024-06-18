import React from "react";

function Events() {
  const clickhandler = (e, count = 1) => {
    console.log("Clicked", e, count);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          clickhandler(e, 6);
        }}
      >
        Click 6
      </button>
      <button onClick={clickhandler}>Click</button>
    </div>
  );
}

export default Events;
