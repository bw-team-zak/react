import { REGISTER_START } from "../../actions/registerAction";
import { REGISTER_200 } from "../../actions/registerAction";
import { REGISTER_404 } from "../../actions/registerAction";

const initState = {
  userInfo: {},
  isRegistering: false,
  error: "",
};

export const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
      };
    case REGISTER_200:
      return {
        ...state,
        isRegistering: false,
        userInfo: action.payload,
      };
    case REGISTER_404:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
