import { LOGIN_FAIL, LOGIN_INIT, LOGIN_SUCCESS } from "./constants";

const initState = {
  loading: false,
  error: false,
  isLoggedIn: false,
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_INIT:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
