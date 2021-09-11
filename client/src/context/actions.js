import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
} from "./constants";

export const LoginStart = (userCredentials) => ({
  type: LOGIN_START,
});

export const LoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailure = () => ({
  type: LOGIN_FAIL,
});

export const Logout = () => ({
  type: LOGOUT,
});

export const UpdateStart = (userCredentials) => ({
  type: UPDATE_START,
});

export const UpdateSuccess = (user) => ({
  type: UPDATE_SUCCESS,
  payload: user,
});

export const UpdateFailure = () => ({
  type: UPDATE_FAIL,
});
