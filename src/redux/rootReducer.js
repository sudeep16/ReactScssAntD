import { combineReducers } from "redux";
import { loginReducer } from "./login/reducers";
import { registerReducer } from "./register/reducers";

const rootReducers = combineReducers({
  loginAuth: loginReducer,
  registerAuth: registerReducer,
});

export default rootReducers;
