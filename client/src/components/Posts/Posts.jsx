import React from "react";
import Post from "./Post/Post";

import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
