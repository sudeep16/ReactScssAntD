import {
  GET_ROLES_FINISH,
  GET_ROLES_INIT,
  GET_ROLES_SUCCESS,
} from "./constants";

const initState = {
  allRoles: [],
};

export const rolesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ROLES_INIT:
      return {
        ...state,
      };
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        allRoles: payload,
      };
    case GET_ROLES_FINISH:
      return {
        ...state,
      };
    default:
      return state;
  }
};
