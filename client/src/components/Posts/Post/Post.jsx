import React from "react";
import { Link } from "react-router-dom";

import "./Post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.postImg && (
        <img className="postImg" src={post.postImg} alt="post img" />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category, i) => (
            <div key={i} className="postCategory">
              {category.name}
            </div>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDescription">
        <p>{post.desc}</p>
      </div>
    </div>
  );
}
