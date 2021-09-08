import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../../context/constants";
import { Context } from "../../context/context";

import "./Login.css";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: LOGIN_START });

    try {
      const { data } = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" ref={usernameRef} />

        <label>Password</label>
        <input className="loginInput" type="password" ref={passwordRef} />

        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
