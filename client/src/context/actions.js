import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from "./constants";

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
