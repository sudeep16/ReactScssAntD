import { combineReducers } from "redux";
import { authorReducers } from "./authors/reducers";
import { bookReducers } from "./books/reducers";
import { loginReducer } from "./login/reducers";
import { registerReducer } from "./register/reducers";
import { usersReducer } from "./users/reducers";

const rootReducers = combineReducers({
  loginAuth: loginReducer,
  registerAuth: registerReducer,
  booksData: bookReducers,
  authorsData: authorReducers,
  usersData: usersReducer,
});

export default rootReducers;
