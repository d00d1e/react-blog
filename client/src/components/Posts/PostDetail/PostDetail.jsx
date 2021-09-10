import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/context";

import "./PostDetail.css";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);

  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  const publicFolder = "http://localhost:5000/uploads/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`/posts/${pathname}`);
      setPost(data);
      setTitle(data.title);
      setDescription(data.desc);
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

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc: description,
      });

      // window.location.reload();
      setEditMode(false);
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

        {editMode ? (
          <input
            className="editTitleInput"
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="postDetailTitle">
            {title}
            {post.username === user?.username && (
              <div className="postDetailEdit">
                <i
                  className="postDetailIcon far fa-edit"
                  onClick={() => setEditMode(true)}
                ></i>
                <i
                  className="postDetailIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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

        {editMode ? (
          <textarea
            className="editDescriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="postDetailDescription">{description}</p>
        )}

        {editMode && (
          <button className="editButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
