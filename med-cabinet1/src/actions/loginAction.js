import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_200 = "LOGIN_200";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const PUT_START = "PUT_START";
export const PUT_200 = "PUT_200";
export const PUT_ERROR = "PUT_ERROR";

export const userLogin = (user) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  const User = {
    username: user.username,
    password: user.password,
  };

  axios
    .post("https://med-cabinet1.herokuapp.com/api/users/login", User)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN_200, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch((er) => {
      console.log("Something went wrong", er.response.data);
      dispatch({
        type: LOGIN_ERROR,
        payload: er,
      });
    });
};

export const feedbackAction = (feedback, id) => (dispatch) => {
  dispatch({ type: PUT_START });
  axios
    .put(`https://med-cabinet1.herokuapp.com/api/users/${id}`, feedback)
    .then((res) => {
      console.log(res);
      // dispatch({ type: PUT_200, payload: res.data });
      // localStorage.setItem("token", res.data.token);
    })
    .catch((er) => {
      console.log("Something went wrong", er.response.data);
      dispatch({
        type: PUT_ERROR,
        payload: er,
      });
    });
};
