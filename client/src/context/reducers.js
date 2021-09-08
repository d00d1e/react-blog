import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./constants";

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAIL:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
