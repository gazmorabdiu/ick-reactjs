import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log("123");
      }
    })();
  }, []);
  return <div>HEllo</div>;
};

export default PostList;
