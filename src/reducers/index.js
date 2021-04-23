import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

// of je kan ook rootReducers
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;