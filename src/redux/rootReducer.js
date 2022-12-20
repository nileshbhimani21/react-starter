import { combineReducers } from "redux";
import * as home from "../pages/Home/redux";

export const rootReducer = combineReducers({
  home: home.reducer,
});