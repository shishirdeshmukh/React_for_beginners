import React, { useEffect, useState } from "react";

function Method() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((e) => {
          return <li key={e.id}>{e.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Method;
