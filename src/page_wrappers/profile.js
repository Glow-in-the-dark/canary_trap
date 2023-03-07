import { connect } from "react-redux";
import { updateUser, getUserProjects, deleteUserProject } from "../actions";
import profile from "../pages/profile";

const mapStateToProps = (state) => ({
  usernameState: state.userStore && state.userStore.usernameState,
  emailState: state.userStore && state.userStore.emailState,
  userObj: (state.userStore && state.userStore.userObj) || {},
  projects: (state.userStore && state.userStore.projects) || [],
});

const mapDispatchToProps = (dispatch) => ({
  //This is how u store a function in a key, and then used later
  dispatchUpdateUser: (requestBody) => {
    console.log("getting customJSON OBJ:");
    // this part is the part which actually runs redux.
    const customActionJsonObject = updateUser(requestBody);
    console.log("Starting DISPATCH");
    dispatch(customActionJsonObject);
  },
  dispatchGetUserProjects: () => {
    const customActionJsonObject = getUserProjects();
    console.log("Starting DISPATCH");
    dispatch(customActionJsonObject);
  },
  dispatchDeleteUserProject: (params) => {
    const customActionJsonObject = deleteUserProject(params);
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
