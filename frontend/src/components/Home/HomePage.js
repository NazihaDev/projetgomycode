import React from 'react';
import './Home.css';
import bookpg from '../../assests/img/book.jpg';
import videoSource from '../../assests/img/books.mp4';
//frontend\src\assests\img\books.mp4
import { Link } from 'react-router-dom';

const HomePage= () => {

  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Catolog</h1>
          <p>Manage your Books with Ease</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};


export default HomePage;





       {/*<div>
      <h1> home page</h1>
  </div>*/}