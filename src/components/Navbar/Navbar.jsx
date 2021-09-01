import React from "react";

import iconImg from "../../assets/img/unnamed.jpeg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">Home</li>
          <li className="navListItem">About</li>
          <li className="navListItem">Contact</li>
          <li className="navListItem">Write</li>
          <li className="navListItem">Logout</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImg" src={iconImg} alt="Profile Img" />
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
