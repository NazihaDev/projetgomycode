import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch ,useSelector} from 'react-redux';
//import './Register.css';
import { registerUserAction } from'../../redux/actions/users/usersActions';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/RegisterUser/SuccessMessage';

const RegisterUser = () => {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 //dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, loading, error, msgRegis, msgError } = userLogin;

//Redirection page principal
  
  
  
  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch( registerUserAction(name, email, password));
    console.log( userInfo, loading, error );
    console.log('inserer les donnees');
  //if (userInfo !== null && error === undefined) 
     // navigate('/');
  };
  /*let jerror = { data: " empty" };
  if (typeof error === "undefined") {
  } else {
    jerror = JSON.parse(JSON.stringify(error));
    //console.log("jerror = ", jerror.data, "loading = ", loading);
  }*/
 
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
        {loading && <Loading />}
          {//error && <SuccessMessage msg ={jerror.data} />
          }
          {/*{<div>message = {msgRegis}</div>}*/}
          {msgRegis && <SuccessMessage msg ={msgRegis} />}
          {msgError && <ErrorMessage error ={msgError} />}
          <h1 className='text-center'>Register</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                 value={name}
                 onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;