import React from "react";
import PostDetails from "../../components/Posts/PostDetail/PostDetail";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./PostPage.css";

export default function Postpage() {
  return (
    <div className="postpage">
      <PostDetails />
      <Sidebar />
    </div>
  );
}
