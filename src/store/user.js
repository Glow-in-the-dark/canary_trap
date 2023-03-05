// This is where i put the RESULTS e.g {JSON OBJECTS} FROM "actions" to store in the GLOBAL STATE.
// This is the REDUCER

export const userStore = (state = {}, action) => {
  console.log("Your State is now in store");
  console.log("action :", action);

  if (action.apiResponse) {
    console.log("api responsre : ", action.apiResponse);
  }
  // THIS IS WHERE it UPDATE TO THE FINAL GLOBAL STORE
  switch (action.type) {
    case "CREATE_USER":
      console.log(action);
      return { ...state, current_user: action.data };
    case "LOGIN_USER":
      console.log(action);
      console.log();
      console.log(action.data);
      return { ...state, current_user: action.data };
    default:
      return {
        ...state,
      };
  }
};

export default {
  userStore,
};
