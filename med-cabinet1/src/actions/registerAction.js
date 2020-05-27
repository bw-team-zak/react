import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_200 = "REGISTER_200";
export const REGISTER_404 = "REGISTER_404";

export const postNewUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_START });

  const User = {
    username: user.username,
    password: user.password,
    med_condition: null,
    age: user.age,
    experienced: user.experienced,
  };

  axios
    .post("https://med-cabinet1.herokuapp.com/api/users/register", User)
    .then((res) => {
      console.log(res);
      dispatch({ type: REGISTER_200 });
    })
    .catch((er) => {
      console.log("Something went wrong", er.response.data);
      dispatch({
        type: REGISTER_404,
        payload: er,
      });
    });
};
