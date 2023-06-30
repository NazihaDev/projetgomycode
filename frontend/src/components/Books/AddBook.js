/*const Login = () => {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  };*/

import React, { useState } from "react";
import { createBookAction } from "../../redux/actions/books/bookActions";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import SuccessMessage from "../../components/RegisterUser/SuccessMessage";

const AddBook = ({ addnewbook }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const userLogin = useSelector((state) => state.userLogin);
  const bookCreated = useSelector((state) => state.bookCreated);
  /**/ const { userInfo } = userLogin;
  const { msgRegis, msgError } = bookCreated;
  console.log(userInfo._id);
  //dispatch action
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    console.log("formSubmitHandler fired");
    e.preventDefault();
    const data = {
      category,
      title,
      author,
      createdBy: userInfo && userInfo._id,
    };
    //e.preventDefault();
    dispatch(createBookAction(data));
    navigate('/books');
    console.log(data);
    //addnewbook.push('/books');

    setIsOpen(false);
  };
  //console.log(category);

  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {msgRegis && <SuccessMessage msg={msgRegis} />}
          {msgError && <ErrorMessage error={msgError} />}
          <h1 className="text-center">Add Book</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">category</label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Category"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Author</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="author"
                />
              </div>
              <button type="submit" className="btn btn-info m-auto">
                create book
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
