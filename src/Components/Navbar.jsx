// Navbar.js
import React from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const navigate = useNavigate();
let user =  localStorage.getItem('loggedInUser')&& JSON.parse(localStorage.getItem('loggedInUser'));
console.log(user);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">HealthWatch</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
           {!user? <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
           </>:  <li className='nav-item d-flex align-items-center text-success'>
               <Link className='nav-link text-primary'>Hello, {user?.name} </Link> 
            </li> }

           
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li>
            <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
