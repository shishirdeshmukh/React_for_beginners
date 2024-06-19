import React, { useState } from "react";
import Todo from "./todo";

function Index() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([" 1 bugati", "2 ferrari"]);

  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <div>
        <Todo todo={todo} />
      </div>
      <div>Count = {count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Index;
