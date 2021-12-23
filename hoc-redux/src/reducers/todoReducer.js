import { ADD_TODO, SET_TODO } from "../constants/todoConstants";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_TODO:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
