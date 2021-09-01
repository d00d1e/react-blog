import React from "react";

import postDetailImg from "../../../assets/img/postimg.jpg";
import "./PostDetail.css";

export default function PostDetail() {
  return (
    <div className="postDetail">
      <div className="postDetailWrapper">
        <img src={postDetailImg} alt="" className="postDetailImg" />
        <h1 className="postDetailTitle">
          Did you know Orchids can be fragrant?
          <div className="postDetailEdit">
            <i className="postDetailIcon far fa-edit"></i>
            <i className="postDetailIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="postDetailInfo">
          <span className="postDetailAuthor">
            Author: <b>J.Lee</b>
          </span>
          <span className="postDetailDate">1 hour ago</span>
        </div>
        <p className="postDetailDescription">
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
