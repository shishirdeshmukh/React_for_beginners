import React, { memo } from "react";

function Todo({ todo }) {
  return (
    <div>
      {todo.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

export default memo(Todo);
