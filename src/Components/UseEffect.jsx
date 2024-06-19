import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount((c) => c + 2);
//   }, []);
//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default UseEffect;

export const Constant = () => {
  const [count, setCount] = useState(0);
  const [calci, setCalci] = useState(0);

  useEffect(() => {
    setCalci(() => count * 2);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        Change
      </button>
      <p>Calci: {calci}</p>
    </div>
  );
};
