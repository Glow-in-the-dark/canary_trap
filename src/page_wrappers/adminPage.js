import { connect } from "react-redux";
import { getAllProjects } from "../actions";
import adminPage from "../pages/adminPage";

const mapStateToProps = (state) => ({
  usernameState: state.userStore.usernameState,
  emailState: state.userStore.emailState,
  userObj: state.userStore.userObj,
  projects: state.userStore.projects,
});

const mapDispatchToProps = (dispatch) => ({
  //This is how u store a function in a key, and then used later
  //   dispatchUpdateUser: (requestBody) => {
  //     console.log("getting customJSON OBJ:");
  //     // this part is the part which actually runs redux.
  //     const customActionJsonObject = updateUser(requestBody);
  //     console.log("Starting DISPATCH");
  //     dispatch(customActionJsonObject);
  //   },
  dispatchGetAllProjects: () => {
    const customActionJsonObject = getAllProjects();
    console.log("Starting DISPATCH for ADMIN getAllProjects");
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adminPage);
