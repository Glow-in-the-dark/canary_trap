import { connect } from "react-redux";
import { createUser } from "../actions";
import signUpPage from "../pages/sign-up";

const mapStateToProps = (state) => ({
  currentUser2: state.userStore.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateUser: (requestBody) => {
    console.log("requestBody1 : ", requestBody);
    console.log("createUser(requestBody)");
    console.log(createUser);
    console.log(createUser(requestBody));
    // this part is the part which actually runs redux.
    const customActionJsonObject = createUser(requestBody);
    dispatch(customActionJsonObject);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(signUpPage);
