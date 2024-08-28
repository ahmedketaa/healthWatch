// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from './Components/auth/login';
import SignUp from './Components/auth/signup';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
