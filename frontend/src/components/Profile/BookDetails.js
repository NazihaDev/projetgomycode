import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/books/bookActions';
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/RegisterUser/SuccessMessage';

const BookDetails = () => {
  const { id } = useParams();

  //Get the book details and fill it in the form
  const bookDetails = useSelector(state => state.bookDetails);

  const { book, loading,error,msgRegis,msgError } = bookDetails;

  const [category, setCategory] = useState(book && !loading && book.category);
  const [title, setTitle] = useState(book && !loading && book.title);
  const [author, setAuthor] = useState(book && book.author);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);*/

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateBook(id, data));
    navigate('/books');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
        
            <>
            {msgRegis && <SuccessMessage msg ={msgRegis} />}
          {msgError && <ErrorMessage error ={msgError} />}
              <h1 className='text-center'>Update Book</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Category </label>
                    <input
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Category name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      type='name'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Author name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Book title'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                   update Book
                  </button>
                </fieldset>
              </form>
            </>
          
         
        </div>
      </div>
    </div>
  );
};

export default BookDetails;