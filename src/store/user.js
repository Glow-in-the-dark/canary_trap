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
      const accessTokenVar = action.data && action.data.access;
      const refreshTokenVar = action.data && action.data.refresh;
      const decodedObj = jwt_decode(accessTokenVar);
      const currentUsernameState = decodedObj.username;
      const userID = decodedObj.id;
      const currentEmailState = decodedObj.email;
      const isAdmin = decodedObj.isAdmin;
      const userObj =
        action.data &&
        action.data.userObj &&
        JSON.parse(JSON.stringify(action.data.userObj));
      window.localStorage.setItem("accessToken", accessTokenVar);
      //this is where it stores the ifo we get from the API's "response" into the state
      console.log("userObj: ", userObj);
      return {
        ...state,
        accessToken: accessTokenVar,
        refreshToken: refreshTokenVar,
        usernameState: currentUsernameState,
        idState: userID,
        emailState: currentEmailState,
        userObj: userObj,
        isAdmin: isAdmin,
      };
    case "UPDATE_USERNAME":
      console.log("update_user", action);
      let currentUserObj = state.userObj
        ? JSON.parse(JSON.stringify(state.userObj))
        : {};
      if (currentUserObj) {
        currentUserObj.username = action.data && action.data.newUsername;
      }
      console.log("currentUserObj : ", currentUserObj);
      return { ...state, userObj: currentUserObj };

    case "GET_USER_PROJECTS":
      console.log("GET_USER_PROJECTS", action);
      return {
        ...state,
        projects:
          action.data &&
          action.data.projects &&
          JSON.parse(JSON.stringify(action.data.projects)),
      };
    case "DELETE_USER_PROJECTS":
      console.log("DELETE_USER_PROJECTS", action);
      return {
        ...state,
        projects:
          action.data &&
          action.data.projects &&
          JSON.parse(JSON.stringify(action.data.projects)),
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
