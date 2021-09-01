import React from "react";

import postImg from "../../../assets/img/postimg.jpg";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={postImg} alt="post img" />
      <div className="postInfo">
        <div className="postCategories">
          <div className="postCategory">Plants</div>
          <div className="postCategory">Life</div>
        </div>
        <span className="postTitle">Did you know Orchids can be fragrant?</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDescription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptates itaque culpa incidunt nemo dicta provident rem eligendi
          suscipit possimus praesentium officiis, animi, dolor distinctio
          molestias minima aliquam. Cum, saepe. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet voluptates itaque culpa incidunt
          nemo dicta provident rem eligendi suscipit possimus praesentium
          officiis, animi, dolor distinctio molestias minima aliquam. Cum,
          saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet voluptates itaque culpa incidunt nemo dicta provident rem
          eligendi suscipit possimus praesentium officiis, animi, dolor
          distinctio molestias minima aliquam. Cum, saepe.
        </p>
      </div>
    </div>
  );
}
