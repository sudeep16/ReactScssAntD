import { finish, init, success } from "../../services/commonTypes";
import { AuthorService } from "./api";
import { ADD_AUTHOR, DELETE_AUTHOR, GET_AUTHORS } from "./constants";

const authorService = new AuthorService();
export const getAllAuthors = () => {
  return async (dispatch) => {
    dispatch(init(GET_AUTHORS));
    const response = await authorService.getAllAuthors();
    dispatch(finish(GET_AUTHORS));
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(success(GET_AUTHORS, response.data.data));
    } else if (!response.isSuccess) {
    }
  };
};

export const addAuthor = (body) => {
  return async (dispatch) => {
    dispatch(init(ADD_AUTHOR));
    const response = await authorService.addAuthor(body);
    dispatch(finish(ADD_AUTHOR));
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(success(ADD_AUTHOR, response.data.data));
    } else if (!response.isSuccess) {
    }
  };
};

export const deleteAuthor = (body) => {
  return async (dispatch) => {
    dispatch(init(DELETE_AUTHOR));
    const response = await authorService.deleteAuthor(body);
    dispatch(finish(DELETE_AUTHOR));
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(success(DELETE_AUTHOR, response.data.data));
    } else if (!response.isSuccess) {
    }
  };
};
