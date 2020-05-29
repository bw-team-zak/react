import { LOGIN_START } from "../../actions/loginAction";
import { LOGIN_200 } from "../../actions/loginAction";
import { LOGIN_ERROR } from "../../actions/loginAction";

const initState = {
  userInfo: {},
  isLoggingIn: false,
  error: "",
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_200:
      return {
        ...state,
        isLoggingIn: false,
        userInfo: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
