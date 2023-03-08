import { connect } from "react-redux";
import {
  adminGetAllProjects,
  adminGetAllUsers,
  adminDeleteProj,
  adminDeleteUser,
} from "../actions";
import adminPage from "../pages/adminPage";

const mapStateToProps = (state) => ({
  usernameState: state.userStore.usernameState,
  emailState: state.userStore.emailState,
  userObj: state.userStore.userObj,
  projects: state.userStore.projects,
  allUsers: state.userStore.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAdminGetAllProjects: () => {
    const customActionJsonObject = adminGetAllProjects();
    console.log("Starting DISPATCH for ADMIN adminGetAllProjects");
    dispatch(customActionJsonObject);
  },
  dispatchAdminGetAllUsers: () => {
    const customActionJsonObject = adminGetAllUsers();
    console.log("Starting DISPATCH for ADMIN adminGetAllUsers");
    dispatch(customActionJsonObject);
  },
  dispatchAdminDeleteProj: (requestBody) => {
    const customActionJsonObject = adminDeleteProj(requestBody);
    console.log("Starting DISPATCH for ADMIN adminDeleteProj");
    dispatch(customActionJsonObject);
  },
  dispatchAdminDeleteUser: (requestBody) => {
    const customActionJsonObject = adminDeleteUser(requestBody);
    console.log("Starting DISPATCH for ADMIN adminDeleteUser");
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(adminPage);
