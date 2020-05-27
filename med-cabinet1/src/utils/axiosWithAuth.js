import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://med-cabinet1.herokuapp.com/api",
  });
};
