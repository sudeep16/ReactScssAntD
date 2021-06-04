import thunk from "redux-thunk";
import { init, finish, success } from "../../services/commonTypes";
import { BookService } from "./api";
import { ADD_BOOK, DELETE_BOOK, GET_BOOKS } from "./constants";

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

export const addBook = (values) => {
  return async (dispatch) => {
    dispatch(init(ADD_BOOK));
    const response = await bookService.addBook(values);
    dispatch(finish(ADD_BOOK));
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(success(ADD_BOOK, response.data.data));
      window.location.href = "/adminDashboard";
      //   history.push("/adminDashboard");
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};

export const deleteBook = (id) => {
  return async (dispatch) => {
    const response = await bookService.deleteBook(id);
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(thunk(DELETE_BOOK, response.data.data));
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};
