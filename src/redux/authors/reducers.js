import {
  GET_AUTHORS_FINISH,
  GET_AUTHORS_INIT,
  GET_AUTHORS_SUCCESS,
} from "./constants";

const initState = {
  allAuthors: [],
};
export const authorReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_AUTHORS_INIT:
      return { ...state };

    case GET_AUTHORS_SUCCESS:
      return { ...state, allAuthors: payload };

    case GET_AUTHORS_FINISH:
      return { ...state };

    default:
      return state;
  }
};
