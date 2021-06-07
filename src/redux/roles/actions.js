import { finish, init, success } from "../../services/commonTypes";
import { RoleService } from "./api";
import { DELETE_ROLE, GET_ROLES } from "./constants";

const roleService = new RoleService();

export const getAllRoles = () => {
  return async (dispatch) => {
    dispatch(init(GET_ROLES));
    const response = await roleService.getAllRoles();
    dispatch(finish(GET_ROLES));
    if (response.isSuccess) {
      dispatch(success(GET_ROLES, response.data.data));
    } else {
      console.log("An error has been occured");
    }
  };
};
export const deleteRole = (id) => {
  return async (dispatch) => {
    const response = await bookService.deleteRole(id);
    if (response.isSuccess) {
      //   console.log(response.data.data);
      dispatch(thunk(DELETE_ROLE, response.data.data));
    } else if (!response.isSuccess) {
      // dispatch(error(response.errorMessage));
    }
  };
};
