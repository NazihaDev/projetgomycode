import React, { useEffect } from "react";
import "./Profile.css";
import pic from "../../assests/img/bookpic.jpg";
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import { getUserProfileAction } from "../../redux/actions/users/usersActions";
//import Loading from '../Loading/Loading';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../../redux/actions/books/bookActions';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;

  //Delete book handler
  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    navigate('/books');
  };

  const listBooks = () => {
    console.log('nb books = ', user?.books.length);
    if (!(user?.books.length === 0)) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Book Name</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {user?.books.map((book) => {
              return (
                <tr className="table-dark" key={book._id}>
                  <th scope="row">{book.author}</th>
                  <td>{book.title}</td>
                  <td>
                   <i
                    onClick={() => handlerDeleteBook(book._id)}
                      className="fas fa-trash "
                      style={{ color: "red", cursor: "progress" }}
              ></i>
              
                  </td>
                  <td>
                  <Link to={`/book/${book && book._id}`}>
                      <i
                        className="far fa-edit"
                        style={{
                          color: "yellow",
                          cursor: "progress",
                        }}
                      ></i>
                   </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <>
          <h1>You don't have any book created.</h1>
          <h2>Start Creating</h2>
        </>
      );
    }
  };
  //Check if user is login otherwise redirect
  //const userLogin = useSelector(state => state.userLogin);
  //const { userInfo } = userLogin;

  /*useEffect(() => {
    if (userInfo === null)
     navigate('/login');
  }, [userInfo, navigate]);

  //Get user Profile
  const userProfile = useSelector(state => state.userProfile);
  const { loading, user } = userProfile;

  const books = userProfile.user && userProfile.user.books;*/

  /*const renderTable = () => {
    if (books) {
      return (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Author</th>
              <th scope='col'>Book Name</th>
              <th scope='col'>Delete</th>
              <th scope='col'>Update</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => {
              return (
                <tr className='table-dark' key={book._id}>
                  <th scope='row'>{book.author}</th>
                  <td>{book.title}</td>
                  <td>Delete</td>
                  <td>Update</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <>
          <h1>You don't have any book created.</h1>
          <Link>Start Creating</Link>
        </>
      );
    }
  };
*/
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <div className="card m-auto " style={{ width: "50%" }}>
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">email {user?.email}</h5>
              <p className="card-text">name {user?.name}</p>
              <Link to="/user-update" className="btn btn-primary">
                Update your profile
              </Link>
              
            </div>
          </div>
        </div>
        <div>{listBooks()}</div>
      </div>
    </div>
  );
};

export default Profile;
