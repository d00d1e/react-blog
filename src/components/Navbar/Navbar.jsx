import React from "react";
import { Link } from "react-router-dom";

import iconImg from "../../assets/img/arhi.png";
import "./Navbar.css";

export default function Navbar() {
  const user = false;

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
          <li className="navListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {user && (
            <li className="navListItem">
              <Link className="link" to="/login">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="navImg" src={iconImg} alt="Profile Img" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
