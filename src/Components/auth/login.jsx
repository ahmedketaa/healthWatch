import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'; //

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem('loggedInUser');

        if (storedUser) {
            const user = JSON.parse(storedUser);

            if (user.email === email && user.password === password) {
              
                navigate('/home');
            } else {
               
                setError('Invalid credentials. Please check your email and password.');
            }
        } else {
           
            setError('No user data found. Please sign up first.');
        }
    };

    return (
        <div className="login-container">
            <div className="container">
            <div className="card w-lg-50 m-auto p-5">
            <h2 className="text-primary">Login</h2>
                <form onSubmit={handleSubmit} className="form ">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Login;
