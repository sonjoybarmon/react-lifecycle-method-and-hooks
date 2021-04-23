import { combineReducers } from "redux";
import simple from "./simple";

const rootReducer = combineReducers({
  simple: simple,
});
export default rootReducer;
