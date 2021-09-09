import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./PostDetail.css";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`/posts/${pathname}`);
      setPost(data);
    };

    getPost();
  }, [pathname]);

  return (
    <div className="postDetail">
      <div className="postDetailWrapper">
        {post.postImg && (
          <img
            className="postDetailImg"
            src={publicFolder + post.postImg}
            alt={post.title}
          />
        )}
        <h1 className="postDetailTitle">
          {post.title}
          <div className="postDetailEdit">
            <i className="postDetailIcon far fa-edit"></i>
            <i className="postDetailIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="postDetailInfo">
          <span className="postDetailAuthor">
            Author:{" "}
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="postDetailDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDetailDescription">{post.desc}</p>
      </div>
    </div>
  );
}
