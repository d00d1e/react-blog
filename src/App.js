import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Postpage from "./pages/PostPage/PostPage";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Postpage />
    </>
  );
}
