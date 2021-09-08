import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Write from "./pages/Write/Write";
import Home from "./pages/Home/Home";
import Postpage from "./pages/PostPage/PostPage";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { Context } from "./context/context";

export default function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={Postpage} />
        <Route exact path="/write" component={user ? Write : Register} />
        <Route exact path="/settings" component={user ? Settings : Register} />
        <Route exact path="/login" component={user ? Home : Login} />
        <Route exact path="/register" component={user ? Home : Register} />
      </Switch>
    </BrowserRouter>
  );
}
