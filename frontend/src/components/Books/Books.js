import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, deleteBook } from "../../redux/actions/books/bookActions";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import "./books.css";
const Books = () => {
  console.log("BookS.js");
  //Fetch books
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookslist = useSelector((state) => state.booksList);
  console.log("bookslist = ", bookslist);
  const { books, loading } = bookslist;
  console.log("books = ", books);
  //Delete book handler
  /*const handlerDeleteBook = (id) => {
    dispatch(deleteBook(id));
    navigate("/books");
  };*/
  /**/ const bookslistvar = () => {
    if (!books || books.length === 0) {
      //if (0 === 0) {
      //return <div>Pas de books</div>;
    } else {
      return books.map((book) => {
        return (
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">{book.title}</div>

              <div className="ag-courses-item_date-box">
                Author:
                <span className="ag-courses-item_date">{book.author}</span>
              </div>
              <div className="ag-courses-item_date-box">
                Category:
                <span className="ag-courses-item_date">{book.category}</span>
              </div>
            </a>
          </div>
        );
      });
    }
  };
  // End of fetch books
  return (
    <div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <>{bookslistvar()}</>
        </div>
      </div>
    </div>
  );
};

export default Books;
/*
<table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Book Name</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr className="table-dark" key={book._id}>
                  <th scope="row">{book.author}</th>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
*/
