import { postService } from "../../services/commonServices";
import { init, success, fail } from "../../services/commonTypes";
import { REGISTER } from "./constants";

const URL = "http://localhost:5000/api/users/register";

export const registerAuth = (values) => {
  return async (dispatch) => {
    dispatch(init(REGISTER));
    // debugger;
    const response = await postService(URL, values);
    console.log(response);
    if (response.isSuccess) {
      dispatch(success(REGISTER, response.data.data));
      window.location.href = "/login";
    } else {
      // showToast(res.data.description, "error");
      dispatch(fail(REGISTER));
    }
  };
};
