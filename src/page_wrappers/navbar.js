import { connect } from "react-redux";
// import { loginUser } from "../actions";
import Navbar from "../components/layout/navbar";

const mapStateToProps = (state) => ({
  usernameState: state.userStore.usernameState,
  emailState: state.userStore.emailState,
});

const mapDispatchToProps = (dispatch) => ({
  // // This part not needed, because NAVbar do not need to dispatch any action
  //   dispatchSignInUser: (requestBody) => {
  //     console.log("getting customJSON OBJ:");
  //     // this part is the part which actually runs redux.
  //     const customActionJsonObject = loginUser(requestBody);
  //     console.log("Starting DISPATCH");
  //     dispatch(customActionJsonObject);
  //   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
