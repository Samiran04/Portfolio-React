import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  REMOVE_ERROR_MESSAGE,
} from "./actionTypes";
import { APIUrls } from "../helpers/getUrl";
import { getFormBody } from "../helpers/utils";

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
