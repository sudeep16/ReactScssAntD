import {
  GET_USERS_FINISH,
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
} from "./constants";

const initState = {
  allUsers: [],
};
export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USERS_INIT:
      return {
        ...state,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        allUsers: payload,
      };
    case GET_USERS_FINISH:
      return {
        ...state,
      };

    default:
      break;
  }
};
