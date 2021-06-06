import thunk from "redux-thunk";
import { init, finish, success } from "../../services/commonTypes";
import { UserService } from "./api";
import { DELETE_USER, GET_USERS } from "./constants";

const userService = new UserService();

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(init(GET_USERS));
    const response = await userService.getAllUsers();
    dispatch(finish(GET_USERS));
    if (response.isSuccess) {
      dispatch(success(GET_USERS, response.data.data));
    } else {
      console.log("THere Has Been An Error");
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    const response = await userService.deleteUser(id);
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(thunk(DELETE_USER, response.data.data));
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};
