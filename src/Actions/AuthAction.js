import axios from "axios";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/signup", userData);
    alert("signup successfully");
    dispatch({
      type: "SIGN_UP",
      payload: res.data.token,
    });
    history.push("/login");
  } catch (e) {
    console.log("Error while create an account", e);
    alert("singup failer");
  }
};

export const singin = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/signin", userData);
    dispatch({
        type: "SIGN_IN",
        payload: res.data.message,
      });
  } catch (e) {
    console.log("Error while login account", e);
    alert("singin failer");
  }
};
