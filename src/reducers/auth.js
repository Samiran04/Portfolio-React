import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
} from "../actions/actionTypes";

const inititalUserState = {
  user: {},
  inProgress: false,
  isSignedUp: false,
  isLoggedIn: false,
  error: null,
};

export default function auth(state = inititalUserState, action) {
  switch (action.type) {
    case USER_CREATE:
      return {
        ...state,
        inProgress: true,
        isSignedUp: false,
        isLoggedIn: false,
        error: null,
      };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isSignedUp: true,
        isLoggedIn: false,
        error: null,
      };
    case USER_CREATE_FAIL:
      return {
        ...state,
        inProgress: false,
        isSignedUp: false,
        isLoggedIn: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
}
