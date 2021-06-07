import {
  ADD_AUTHOR_FINISH,
  ADD_AUTHOR_INIT,
  ADD_AUTHOR_SUCCESS,
  DELETE_AUTHOR,
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

    case ADD_AUTHOR_INIT:
      return { ...state };

    case ADD_AUTHOR_SUCCESS:
      return { ...state, allAuthors: [...state.allAuthors, payload] };

    case ADD_AUTHOR_FINISH:
      return { ...state };

    case DELETE_AUTHOR:
      return { ...state };

    default:
      return state;
  }
};
