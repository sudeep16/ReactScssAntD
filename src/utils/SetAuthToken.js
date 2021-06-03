import Axios from "axios";
// import { accessTokenKey } from "./config";

const setAuthToken = (token) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete Axios.defaults.headers.common["Authorization"];
    // localStorage.removeItem(accessTokenKey);
  }
};

export default setAuthToken;
