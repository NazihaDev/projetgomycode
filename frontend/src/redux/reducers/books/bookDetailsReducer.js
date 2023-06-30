import {
    BOOK_DETAIL_FAIL,
    BOOK_DETAIL_REQUEST,
    BOOK_DETAIL_SUCCESS,
  } from '../../actions/actionTypes';
  
  const bookDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOK_DETAIL_REQUEST:
        return {
          loading: true,
        };
      case BOOK_DETAIL_SUCCESS:
        return {
          book: action.payload,
          loading: false,
           msgRegis : 'book update successfully',
        };
      case BOOK_DETAIL_FAIL:
        return {
          loading: false,
          error: action.payload,
           msgError : 'book already exist',
        };
      default:
        return state;
    }
  };
  
  export default bookDetailsReducer;