import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    // Register
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        userInfo: action.payload,
        msgRegis : 'User created successfully',
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        msgError : 'User already exist',
        error: action.payload,
      };
    // Login
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        //loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      //console.log("USER_LOGIN_FAIL", action.payload);
      return {
        //loading: true,
        error: action.payload,
        //userInfo: action.payload,
      };
    // Logout
    case USER_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default userReducer;
