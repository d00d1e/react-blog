import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_FAIL,
  UPDATE_START,
  UPDATE_SUCCESS,
} from "./constants";

export const Reducers = (state, action) => {
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
    case LOGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case UPDATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case UPDATE_FAIL:
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
