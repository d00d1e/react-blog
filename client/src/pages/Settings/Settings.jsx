import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import {
  UPDATE_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
} from "../../context/constants";
import { Context } from "../../context/context";
import "./Settings.css";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/uploads/";

  useEffect(() => {
    const getProfile = async () => {
      const { data } = await axios.get(`/users/${user._id}`);
      setUsername(data.username);
      setEmail(data.email);
      setPassword(data.password);
    };

    getProfile();
  }, [user._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: UPDATE_START });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;

      data.append("name", filename);
      data.append("file", file);
      updatedUser.profileImg = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const { data } = await axios.put(
        `/users/${user._id}/profile`,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: UPDATE_SUCCESS, payload: data });
      // window.location.reload();
    } catch (error) {
      dispatch({ type: UPDATE_FAIL });
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>

        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Image</label>
          <div className="settingsProfileImg">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : publicFolder + user.profileImg
              }
              alt={user.username}
            />
            <label htmlFor="fileInput">
              <i className="settingsProfileImgIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span className="updatedProfileMessage">
              Profile successfully updated
            </span>
          )}
        </form>
      </div>

      <Sidebar />
    </div>
  );
}
