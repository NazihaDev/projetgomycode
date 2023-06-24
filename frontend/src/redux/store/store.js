import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookListReducer from '../reducers/books/bookListReducer';
import createBookReducer from '../reducers/books/createBookReducer';
import userReducer from'../reducers/users/userAuthreducer';
import userProfileReducer from '../reducers/users/userProfileReducer';
import updateUserProfile from '../reducers/users/updateUserProfile';
import deleteBookReducer from '../reducers/books/bookdelete';

import bookDetailsReducer from '../reducers/books/bookDetailsReducer';
import usersListReducer from '../reducers/users/usersListReducer';

const middleware = [thunk];

const reducer = combineReducers({
  userLogin: userReducer,  //login,register
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  bookDetails: bookDetailsReducer,
  userProfile: userProfileReducer,
  updatedUser: updateUserProfile,
  usersList: usersListReducer,
  bookDelete:deleteBookReducer

});
const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

  const initialState = {
    userLogin: { userInfo: userAuthFromStorage },
    
   
  };
  
const store = createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;