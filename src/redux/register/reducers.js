import { REGISTER_FAIL, REGISTER_INIT, REGISTER_SUCESS } from "./constants";

const initState = {
  users: [],
  loading: false,
};

export const registerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_INIT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
