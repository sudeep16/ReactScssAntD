import { finish, init, success } from "../../services/commonTypes";
import { RoleService } from "./api";
import { GET_ROLES } from "./constants";

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
