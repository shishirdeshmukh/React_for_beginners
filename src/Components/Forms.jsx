import { useState } from "react";
import React from "react";

function Forms() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    alert(`uame is ${uname} and password is ${password} `);
  };

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          id="name"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;
