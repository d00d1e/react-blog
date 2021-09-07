import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`/posts/${search}`);

      setPosts(data);
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
