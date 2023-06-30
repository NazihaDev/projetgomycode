import {
    CREATE_BOOK_FAIL,
    CREATE_BOOK_REQUEST,
    CREATE_BOOK_SUCCESS,
  } from '../../actions/actionTypes';
  
  const createBookReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_BOOK_REQUEST:
        return {
          loading: true,
        };
      case CREATE_BOOK_SUCCESS:
        return {
          book: action.payload,
          loading: false,
          msgRegis : 'create book successfully',
        };
      case CREATE_BOOK_FAIL:
        return {
          //loading: false,
          error: action.payload,
          msgError : 'book already exist'
        };
      default:
        return state;
    }
  };
  
  export default createBookReducer;