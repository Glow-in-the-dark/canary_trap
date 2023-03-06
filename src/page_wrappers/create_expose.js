import { connect } from "react-redux";
import { loginUser } from "../actions";
import Create_Expose from "../pages/Create_Expose";

const mapStateToProps = (state) => ({
  usernameState: state.userStore.usernameState,
  emailState: state.userStore.emailState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSignInUser: (requestBody) => {
    console.log("getting customJSON OBJ:");
    // this part is the part which actually runs redux.
    const customActionJsonObject = loginUser(requestBody);
    console.log("Starting DISPATCH");
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Create_Expose);
