import React, { useEffect, useState } from "react";

function MethodPOST() {
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  };
  return (
    <form onSubmit={submithandler}>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MethodPOST;
