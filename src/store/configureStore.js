import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//----
import { ROOT_reducer } from "./combinedReducer";
import callUserAPI from "../middleware/callUsersAPI";
//This is how redux works!
// It takes current state from root reducer, and take in whatever JSON objs that we dispatch, and
// pass it through the middlewares.
// Then based on whatever outcome of middleware, and then pass it back into the root_reducers.

export default function configureAppStore() {
  const store = configureStore({
    reducer: ROOT_reducer, // import all the COMBINED store of all the "global" states
    middleware: [callUserAPI],
  });

  return store;
}
