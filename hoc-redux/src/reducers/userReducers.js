import { SET_USER } from "../constants/userContants";

const initState = {
  info: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
