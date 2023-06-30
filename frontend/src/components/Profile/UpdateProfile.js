import React ,{ useState}from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../redux/actions/users/usersActions';
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from '../../components/RegisterUser/SuccessMessage';

const UpdateProfile = () => {


  //Get the user from localstorage and pass to the initial states
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const [name, setName] = useState(userInfo?.name );
  const [email, setEmail] = useState(userInfo?.email);
  const [password, setPassword] = useState('');

  
  //Get the updated user details from store and display message
  const updatedUser = useSelector(state => state.updatedUser);
  const { user, loading,msgRegis,msgError, success, error } = updatedUser;

  //dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
   dispatch(updateUser(name, email, password));
   navigate('/Profile');
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
         {/* {user && !loading && success && (
            <SuccessMessage msg='Updated successfully. Logout and login with your new credentials' />
         )}*/}
         {msgRegis && <SuccessMessage msg ={msgRegis} />}
          {msgError && <ErrorMessage error ={msgError} />}
          <h1 className='text-center'>Update</h1>
          <form onSubmit={formSubmitHandler} >
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
              <button type='submit' className='btn btn-primary m-auto'>
                Update your profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;