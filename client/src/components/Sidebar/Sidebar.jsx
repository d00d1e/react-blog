import React, { useEffect, useState } from "react";
import axios from "axios";

import sidebarImg from "../../assets/img/unnamed.jpeg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img className="sidebarImg" src={sidebarImg} alt="" />
        <p className="sidebarSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          quidem.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {categories.map((category, i) => (
            <Link key={i} className="link" to={`/category=${category.name}`}>
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
