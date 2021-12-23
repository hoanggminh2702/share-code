import axios from "axios";
import { SET_USER } from "../constants/userContants";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const login = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/login", {
      username: username,
      password: password,
    });

    dispatch(setUser(res.data));
  } catch (error) {
    console.log(error);
  }
};
