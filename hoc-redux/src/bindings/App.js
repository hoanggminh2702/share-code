import { connect } from "react-redux";
import App from "../App";

const manageStateProps = (state) => {
  return {
    user: state.user.info,
  };
};

export default connect(manageStateProps)(App);
