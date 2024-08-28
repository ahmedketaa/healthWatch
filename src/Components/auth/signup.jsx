import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputSwitch } from "primereact/inputswitch";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [checked, setChecked] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const smartWatch = {
            name: "HealthWatch Pro",
            ipAddress: "192.168.1.10",
            batteryLevel: "85%",
            lastSync: "2024-08-28 14:30"
        };
    
        const user = {
            email,
            password,
            name,
            age,
            address,
            gender,
            bloodGroup,
            smartWatch
        };
    
        // Save user info to local storage as JSON
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    
        navigate('/login');
    };
    

    return (
        <div className="container my-4">
            <div className="card  m-auto w-75 shadow-sm">
                <h3 className='my-3 m-auto text-success'>Patient Registration</h3>
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
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
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                                type="number"
                                id="age"
                                className="form-control"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select
                                id="gender"
                                className="form-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                        <select
                            id="bloodGroup"
                            className="form-select"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            required
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                         
                         <div className="align-items-center d-flex justify-content-start gap-3 mb-5">
                                        <h3 className='h5'>Alow Notification</h3>
                                      <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                              </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
