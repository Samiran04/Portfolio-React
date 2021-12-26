import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  REMOVE_ERROR_MESSAGE,
  CREATE_SESSION,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAIL,
  SIGN_OUT,
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
    case CREATE_SESSION:
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
    case CREATE_SESSION_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isSignedUp: false,
        isLoggedIn: true,
        error: null,
        user: action.user,
      };
    case USER_CREATE_FAIL:
    case CREATE_SESSION_FAIL:
      return {
        ...state,
        inProgress: false,
        isSignedUp: false,
        isLoggedIn: false,
        error: action.error,
      };
    case REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        error: null,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
