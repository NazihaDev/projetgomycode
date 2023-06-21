import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';

const Books = () => {
    console.log('BookS.js');
  //Fetch books
  const dispatch = useDispatch();
  //useEffect(() => {
    dispatch(fetchBooks());
  //}, [dispatch]);
  /*const bookslist = useSelector(state => state.bookslist);
  const { books, loading } = bookslist;*/
  // End of fetch books

  //Delete book handler
/*const handlerDeleteBook = id => {
    //dispatch(deleteBook(id));
   // history.push('/books');
  };*/
  return (
    <div>
      
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Action</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                
                    
                      <tr className='table-dark' >
                        <th scope='row'></th>
                        <td></td>
                        <td>
                          <i
                            
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                        <td>
                          <a>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}></i>
                          </a>
                        </td>
                      </tr>
                    
                
              </tbody>
            </table>
          </div>
        </div>
    
    </div>
  );
};

export default Books;