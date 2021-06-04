import {
  DELETE_BOOK,
  GET_BOOKS_FINISH,
  GET_BOOKS_INIT,
  GET_BOOKS_SUCCESS,
} from "./constants";

const initState = {
  allBooks: [],
};

export const bookReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_INIT:
      return {
        ...state,
      };

    case GET_BOOKS_SUCCESS:
      //   console.log("Payload: ", payload);
      return {
        ...state,
        allBooks: payload,
      };

    case GET_BOOKS_FINISH:
      return {
        ...state,
      };

    case DELETE_BOOK:
      return {
        ...state,
      };

    default:
      return state;
  }
};
