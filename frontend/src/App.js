import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Navbar from './components/Navbar/Navbar'; 
import Books from './components/Books/Books'; 
import LoginUser from './components/RegisterUser/LoginUser';
//import bookDetails from './components/Books/BookDetails';
import RegisterUser from './components/RegisterUser/RegisterUser';
import HomePage from './components/Home/HomePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import BookDetails from './components/Profile/BookDetails';
import Admin from './components/Admin/Admin';
  console.log('App function fired')
  console.log('affiche le tableau book');
  const App = () => {
    return (
      <>
        {/*<Navbar/><Switch></Switch>  <BrowserRouter></BrowserRouter>*/}
        
        <Router>
          <Navbar/>
          <Routes>
            {/*<Route exact path='/' element={<Navbar/>} />*/}
           <Route exact path="/" element={<HomePage/>} />
           <Route exact path="/profile" element={<Profile/>} />
           <Route exact path="/book/:id" element={<BookDetails/>} />
           <Route exact path="/user-update" element={<UpdateProfile/>} />
            <Route exact path="/addbook" element={<AddBook />} />
            <Route exact path="/books" element={<Books />} />
            <Route exact path="/login" element={<LoginUser />} />
            <Route exact path="/register" element={<RegisterUser />} />
            {/*<Route exact path='/users' component={Users} />*/}
            <Route exact path='/admin' element={<Admin/>} />
            
          </Routes>
        </Router>
      </>
    );
  };
  

export default App;
