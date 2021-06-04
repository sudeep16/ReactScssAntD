import { postService } from "../../services/commonServices";
import { LOGIN } from "./constants";
import { init, success, fail } from "../../services/commonTypes";

const URL = "http://localhost:5000/api/users/login";

export const loginAuth = (values) => {
  return async (dispatch) => {
    dispatch(init(LOGIN));
    const response = await postService(URL, values);
    if (response.isSuccess) {
      const token = response.data.token;
      localStorage.setItem("usertoken", token);
      dispatch(success(LOGIN, response.data));
      window.location.href = "/adminDashboard";
    } else {
      // showToast(res.data.description, "error");
      dispatch(fail(LOGIN));
    }
  };
};
