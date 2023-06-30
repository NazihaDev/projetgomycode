import {
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
  } from '../../actions/actionTypes';
 
  const updateUserProfile = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return {
          loading: true,
        };
      case USER_UPDATE_SUCCESS:
        return {
          user: action.payload,
          //loading: false,
          success: true,
          msgRegis : 'User update successfully',
        };
      case USER_UPDATE_FAIL:
        return {
          error: action.payload,
          loading: false,
          msgError : 'User already exist',
        };
      default:
        return state;
    }
  };
  
  export default updateUserProfile;