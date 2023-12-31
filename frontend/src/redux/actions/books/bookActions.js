import axios from 'axios';
import {
    CREATE_BOOK_FAIL,
    CREATE_BOOK_REQUEST,
    CREATE_BOOK_SUCCESS,

    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAIL,

    DELETE_BOOK_FAIL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_REQUEST,
    
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_FAIL,
    BOOK_DETAIL_REQUEST,
   
    BOOK_UPDATE_SUCCESS,
    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_FAIL/*,*/
  } from '../actionTypes';

 const createBookAction = bookData => {
    return  async dispatch => {
      try{   
        dispatch({
          type: CREATE_BOOK_REQUEST,
        
        });
        const config = {
          
            'Content-Type': 'application/json',
          };
     
        const { data } = await axios.post('/api/books', bookData, config);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
        dispatch({
          type: CREATE_BOOK_FAIL,
          payload: error.response 
          //&& error.response.data.message,
        });
      }
    };
  };    
//Fetch all books
 const fetchBooks = () => {
  return async dispatch => {
    try {
      dispatch({
        //type: FETCH_USERS_REQUEST,
        type: FETCH_BOOK_REQUEST,
        //loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const {data } = await axios.get('/api/books', config);

      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch a signle book
 const fetchBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/books/${id}`, bookData, config);

      dispatch({
        type: BOOK_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DETAIL_FAIL,
        error: error.response 
        //&& error.response.data.message,
      });
    }
  };
};
/**/
//UPDATE BOOK

 const updateBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`/api/books/${id}`, bookData, config);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response
        // && error.response.data.message,
      });
    }
  };
};

//delete a book

const deleteBook = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`/api/books/${id}`, config);
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_BOOK_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        loading: false,
        error: error.response
        // && error.response.data.message,
      });
    }
  };
};



   export{createBookAction,fetchBooks,updateBook,deleteBook,fetchBook};  
  