import { finish, init, success } from "../../services/commonTypes";
import { AuthorService } from "./api";
import { GET_AUTHORS } from "./constants";

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

export const addAuthor = () => {
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
