import thunk from "redux-thunk";
import { init, finish, success } from "../../services/commonTypes";
import { BookService } from "./api";
import { DELETE_BOOK, GET_BOOKS } from "./constants";

const bookService = new BookService();
export const getAllBooks = () => {
  return async (dispatch) => {
    dispatch(init(GET_BOOKS));
    const response = await bookService.getAllBooks();
    dispatch(finish(GET_BOOKS));
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(success(GET_BOOKS, response.data.data));
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};

export const deleteBook = (id) => {
  return async (dispatch) => {
    debugger;
    const response = await bookService.deleteBook(id);
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(thunk(DELETE_BOOK, response.data.data));
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};
