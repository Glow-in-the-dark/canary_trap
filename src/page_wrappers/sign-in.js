import { connect } from "react-redux";
import { loginUser } from "../actions";
import signInPage from "../pages/sign-in";

const mapStateToProps = (state) => ({
  currentUser2: state.userStore.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSignInUser: (requestBody) => {
    // this part is the part which actually runs redux.
    const customActionJsonObject = loginUser(requestBody);
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(signInPage);
