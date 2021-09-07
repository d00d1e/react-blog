import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);

    try {
      const { data } = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="registerButton" type="submit">
          Register
        </button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>

      {error && <span className="registerError">Something went wrong!</span>}
    </div>
  );
}
