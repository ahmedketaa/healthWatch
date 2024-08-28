import React, { useEffect, useRef, useState } from 'react';
import BloodPressureChart from './BloodPressureChart';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import Footer from './Footer';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';

function Home() {
    const toast = useRef(null);
    const [healthTips, setHealthTips] = useState([
        "Drink plenty of water to stay hydrated.",
        "Regular exercise is essential for maintaining good health.",
        "Get at least 7-8 hours of sleep each night.",
        "Avoid excessive salt intake to prevent high blood pressure.",
        "Eat a balanced diet rich in fruits and vegetables.",
        "Manage stress through relaxation techniques or hobbies."
    ]);
    const [tipIndex, setTipIndex] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        const interval = setInterval(() => {
            toast.current.show({ severity: 'info', summary: 'Health Tip', detail: healthTips[tipIndex],  life: 10000 });
            setTipIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
        }, 30000); 

        return () => clearInterval(interval); 
    }, [tipIndex, healthTips]);
   
    const userString = localStorage.getItem('loggedInUser');

    if (!userString) {
        navigate('/login');
        return null;
    }

    let user;

    try {
        user = JSON.parse(userString);
    } catch (error) {
        console.error('Error parsing user data:', error);
        navigate('/login');
        return null;
    }

    
    return (
        <div className="">
               <Toast ref={toast} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-primary">Welcome, {user.name}</h2>
                        <div className="info-box">
                            <p><strong>Age:</strong> <span className="text-info">{user.age}</span></p>
                            <p><strong>Address:</strong> <span className="text-info">{user.address}</span></p>
                            <p><strong>Gender:</strong> <span className="text-info">{user.gender}</span></p>
                            <p><strong>Blood Group:</strong> <span className="text-info">{user.bloodGroup}</span></p>
                            <p><strong>Heart Pulse:</strong> <span className="text-success">72 BPM</span></p>
                            <p><strong>Smart Watch:</strong></p>
                            <ul>
                                <li><strong>Name:</strong> {user.smartWatch.name}</li>
                                <li><strong>IP Address:</strong> {user.smartWatch.ipAddress}</li>
                                <li><strong>Battery Level:</strong> {user.smartWatch.batteryLevel}</li>
                                <li><strong>Last Sync:</strong> {user.smartWatch.lastSync}</li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                    <BloodPressureChart />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
