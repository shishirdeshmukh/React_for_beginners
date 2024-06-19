import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/header">Header</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>

      <div>
        <Link to="/contact">contact</Link>
      </div>
      <div>Home</div>
    </div>
  );
}

export default Home;
