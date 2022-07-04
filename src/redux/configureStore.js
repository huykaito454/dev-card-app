import { configureStore, combineReducers } from "@reduxjs/toolkit";
import emailSlice from "./emailSlice";
const reducer = combineReducers({
  email: emailSlice,
});
const store = configureStore({
  reducer,
});
export default store;
