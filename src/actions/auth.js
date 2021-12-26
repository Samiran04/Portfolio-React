import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  REMOVE_ERROR_MESSAGE,
  CREATE_SESSION,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAIL,
  SIGN_OUT,
} from "./actionTypes";
import { APIUrls } from "../helpers/getUrl";
import { getFormBody } from "../helpers/utils";
import jwt_decode from "jwt-decode";

export function startCreateUser() {
  return {
    type: USER_CREATE,
  };
}

export function createUserFail(data) {
  return {
    type: USER_CREATE_FAIL,
    error: data.error,
  };
}

export function createUserSuccess() {
  return {
    type: USER_CREATE_SUCCESS,
  };
}

export function removeErrorMessage() {
  return {
    type: REMOVE_ERROR_MESSAGE,
  };
}

export function createSession() {
  return {
    type: CREATE_SESSION,
  };
}

export function createSessionSuccess(data) {
  return {
    type: CREATE_SESSION_SUCCESS,
    data: data,
  };
}

export function createSessionFail(error) {
  return {
    type: CREATE_SESSION_FAIL,
    error: error,
  };
}

export function signOut() {
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT,
  };
}

export function createUser(email, password, confirm_password, name) {
  const url = APIUrls.signup();

  return (dispatch) => {
    dispatch(startCreateUser());
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password, confirm_password, name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          dispatch(createUserFail({ error: data.error }));
        } else {
          dispatch(createUserSuccess());
        }
      });
  };
}

export function authenticateUser(email, password) {
  const url = APIUrls.login();
  return (dispatch) => {
    dispatch(createSession());
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          dispatch(createSessionFail({ error: data.error }));
        } else {
          localStorage.setItem("token", data.data.token);
          const user = jwt_decode(data.data.token);
          dispatch(
            createSessionSuccess({
              name: user.name,
              _id: user._id,
              email: user.email,
              password: user.password,
            })
          );
        }
      });
  };
}

export function destroySession() {
  return (dispatch) => {
    dispatch(signOut());
  };
}
