import { userConstants } from "../actions/types";

const defaultState = {
  user: {
    meetups: []
  },
  loggedIn: false
};

export function authentication(state = defaultState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: action.user.owner
      };
    case userConstants.LOGOUT:
      return {};
    case userConstants.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
