import { connect } from "react-redux";
import { setUser, login } from "../actions/userAction";
import Login from "../components/Login";
const manageStateProps = (state) => {
  return {
    user: state.user.info,
  };
};

const manageActionProps = (dispatch) => {
  return {
    setUser: (payload) => dispatch(setUser(payload)),
    login: (username, password) => dispatch(login(username, password)),
  };
};

export default connect(manageStateProps, manageActionProps)(Login);
