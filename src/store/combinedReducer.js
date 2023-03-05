// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userStore } from "./user";

//ROOT_Reducers stores all the STATES
export const ROOT_reducer = combineReducers({
  userStore,
});
