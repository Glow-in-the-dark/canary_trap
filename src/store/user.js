import jwt_decode from "jwt-decode";

// This is where i put the RESULTS e.g {JSON OBJECTS} FROM "actions" to store in the GLOBAL STATE.
// This is the REDUCER

export const userStore = (state = {}, action) => {
  console.log("Your State is now in store");
  console.log(" check action :", action);

  if (action.apiResponse) {
    console.log("api response : ", action.apiResponse);
  }
  // THIS IS WHERE it UPDATE TO THE FINAL GLOBAL STORE
  switch (action.type) {
    case "CREATE_USER":
      console.log("create_user", action);
      return { ...state, current_user: action.data }; //this is where it stores the response into the state
    case "LOGIN_USER":
      console.log("login_user", action);
      console.log(action.data);

      const accessTokenVar = action.data.access;
      const refreshTokenVar = action.data.refresh;
      const decodedObj = jwt_decode(accessTokenVar);
      const currentUsernameState = decodedObj.username;
      const userID = decodedObj.id;
      const currentEmailState = decodedObj.email;
      // const isAdmin = decodedObj.isAdmin;
      const userObj = action.data.userObj;

      //this is where it stores the ifo we get from the API's "response" into the state
      return {
        ...state,
        accessToken: accessTokenVar,
        refreshToken: refreshTokenVar,
        usernameState: currentUsernameState,
        idState: userID,
        emailState: currentEmailState,
        userObj: userObj,
        // isAdmin: isAdmin,
      };
    default:
      return {
        ...state,
      };
  }
};

export default {
  userStore,
};
