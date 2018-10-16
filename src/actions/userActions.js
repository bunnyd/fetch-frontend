import { userConstants } from "./types";
import { userService } from "../_services/user.service";
import { alertActions } from "./alertActions";

export const userActions = {
  login,
  logout,
  setUser
};

function login(email, password, history) {
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      user => {
        dispatch(success(user));
        history.push("/profile");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function setUser(user) {
  return { type: userConstants.SETUSER, payload: user };
}
