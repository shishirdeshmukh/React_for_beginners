import React, { useState } from "react";

function ChangeState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
  });

  const updateColor = () => {
    setCar(() => {
      return { ...car, color: "blue" };
    });
  };
  return (
    <div>
      <div>
        <h1>My Car is {car.brand}</h1>
      </div>
      <p>
        Color of my {car.model} is {car.color} and its Year is {car.year}
      </p>
      <div>
        <button onClick={updateColor}>updateColor</button>
      </div>
    </div>
  );
}

export default ChangeState;
