import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/context";

import "./PostDetail.css";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  const publicFolder = "http://localhost:5000/uploads/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`/posts/${pathname}`);
      setPost(data);
    };

    getPost();
  }, [pathname]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });

      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

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
          {post.username === user?.username && (
            <div className="postDetailEdit">
              <i className="postDetailIcon far fa-edit"></i>
              <i
                className="postDetailIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
