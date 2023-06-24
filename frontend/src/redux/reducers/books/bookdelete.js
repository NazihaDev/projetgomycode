import {
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
} from "../../actions/actionTypes";
const deleteBookReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOK_REQUEST:
      return {
        loading: true,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        test: action.payload,
        loading: false,
      };
    case DELETE_BOOK_FAIL:
      return {
        //loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteBookReducer;
