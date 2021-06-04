import { combineReducers } from "redux";
import { bookReducers } from "./books/reducers";
import { loginReducer } from "./login/reducers";
import { registerReducer } from "./register/reducers";

const rootReducers = combineReducers({
  loginAuth: loginReducer,
  registerAuth: registerReducer,
  booksData: bookReducers,
});

export default rootReducers;
