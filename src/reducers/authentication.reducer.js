import { userConstants } from "../actions/types";

const defaultState = {
  user: {},
  loggedIn: false
};

export function authentication(state = defaultState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGOUT:
      return {};
    case userConstants.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
