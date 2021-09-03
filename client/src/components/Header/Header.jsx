import React from "react";

import headerImg from "../../assets/img/headerImg.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
    </div>
  );
}
