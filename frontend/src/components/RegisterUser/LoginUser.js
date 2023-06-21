import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/users/usersActions";
import ErrorMessage from "../ErrorMessage";
import Loading from "../../components/Loading/Loading";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //grab pieces of data from our store that we care about
  const state = useSelector((state) => {
    return state.userLogin;
  });
  
  const { loading, userInfo, error } = state;

  //submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("email : ", email, " password : ", password);
    dispatch(loginUserAction(email, password));
    navigate('/Navbar');
  };
  
  //redirection le page principale
 //navigate('/Navbar');
  /*useEffect(() => {
      if (!userInfo) {
        navigate('/Navbar');
      }
    }, [state]);*/
  console.log("error = ", error, "loading = ", loading);
  let jerror = { data: " empty" };
  if (typeof error === "undefined") {
  } else {
    jerror = JSON.parse(JSON.stringify(error));
   
  }
  const displayError = jerror.data != " empty";
  
  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {loading && (
            <h1>
              <Loading />
            </h1>
          )}
         
          {error && <ErrorMessage error={jerror.data} />}
          {
            // error && <ErrorMessage>{jerror.data}</ErrorMessage>
          }
          <h1 className="text-center">Login</h1>
          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  required
                />
                {/*renderErrorMessage("email")*/}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="pass"
                  required
                />
                {/*renderErrorMessage("pass")*/}
              </div>

              <button type="submit" className="btn btn-info m-auto">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
