import React from "react";

import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" />

        <label>Password</label>
        <input className="loginInput" type="password" />

        <button className="loginButton">Login</button>
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}
