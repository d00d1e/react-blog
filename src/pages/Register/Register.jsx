import React from "react";

import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" />

        <label>Email</label>
        <input className="registerInput" type="email" />

        <label>Password</label>
        <input className="registerInput" type="password" />

        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">Login</button>
    </div>
  );
}
