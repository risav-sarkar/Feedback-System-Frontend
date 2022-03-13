import axios from "axios";

export const loginCallAdmin = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    // const res = await axios.post(
    //   "http://localhost:8000/api/auth/login",
    //   userCredential
    // );
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    dispatch({ type: "LOGIN_SUCCESS", payload: userCredential });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const loginCallStudent = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    // const res = await axios.post(
    //   "http://localhost:8000/api/auth/login",
    //   userCredential
    // );
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    dispatch({ type: "LOGIN_SUCCESS", payload: userCredential });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
