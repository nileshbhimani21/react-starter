import { combineReducers } from "redux";
import * as home from "../pages/Home/redux";
import * as shop from "../pages/Shop/redux";

export const rootReducer = combineReducers({
  home: home.reducer,
  shop: shop.reducer,
});