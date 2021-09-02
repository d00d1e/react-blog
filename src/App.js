import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Write from "./pages/Write/Write";
import Home from "./pages/Home/Home";
import Postpage from "./pages/PostPage/PostPage";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Postpage /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Login />
    </>
  );
}
