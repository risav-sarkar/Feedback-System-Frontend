import axios from "axios";

export const loginCallAdmin = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.get(
      `http://192.168.43.240:8000/adm?email=${userCredential.email}&password=${userCredential.password}`
    );
    console.log(res.status);
    res.data.data.type = "0";
    const temp = { user: res.data.data, institute: "testInst" };
    dispatch({ type: "LOGIN_SUCCESS", payload: temp });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: true });
  }
};

export const loginCallStudent = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.get(
      `http://192.168.43.240:8000/student?email=${userCredential.email}&password=${userCredential.password}`
    );
    console.log(res);
    res.data.data.type = "1";
    res.data.data.instituteDetails = res.data.institute;
    const temp = { user: res.data.data, institute: "testInst" };
    dispatch({ type: "LOGIN_SUCCESS", payload: temp });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: true });
  }
};
