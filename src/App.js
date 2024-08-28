// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from './Components/auth/login';
import SignUp from './Components/auth/signup';
import Home from './Components/Home';
import NavbarComponent from './Components/Navbar';

function App() {
  
  return (
    <Router>
      <NavbarComponent />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
