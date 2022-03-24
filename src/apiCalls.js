import axios from "axios";

export const loginCallAdmin = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const user = await axios.get("http://192.168.43.240:8000/adm", {
      params: {
        email: "ahahaha@gmail.com",
        password: "dsibsdfis",
        type: "view",
      },
    });
    user.type = "0";
    const temp = { user: user, institute: "testInst" };
    dispatch({ type: "LOGIN_SUCCESS", payload: temp });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const loginCallStudent = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const user = await axios.get("http://192.168.43.240:8000/adm", {
      params: {
        email: "ahahaha@gmail.com",
        password: "dsibsdfis",
        type: "view",
      },
    });
    user.type = "1";
    const temp = { user: user, institute: "testInst" };
    dispatch({ type: "LOGIN_SUCCESS", payload: temp });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const updateUser = async (data, dispatch) => {
  try {
    // const res = await axios.post(
    //   "http://localhost:8000/api/auth/login",
    //   userCredential
    // );
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    const temp = { user: data.user, institute: data.institute };
    dispatch({ type: "UPDATE_USER", payload: temp });
  } catch (err) {
    console.log(err);
  }
};

export const updateInstitute = async (data, dispatch) => {
  try {
    const temp = { user: data.user, institute: data.institute };
    dispatch({ type: "UPDATE_USER", payload: temp });
  } catch (err) {
    console.log(err);
  }
};
