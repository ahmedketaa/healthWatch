import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
    const navigate = useNavigate();
    const user = localStorage.getItem('loggedInUser') && JSON.parse(localStorage.getItem('loggedInUser'));

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    return (
        <Navbar bg="light" className='px-3' expand="lg">
            <Navbar.Brand as={Link} to="/home">HealthWatch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    {!user ? (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        </>
                    ) : (
                        <Nav.Item className="d-flex align-items-center text-success">
                            <Nav.Link className="text-primary">Hello, {user.name}</Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
                {user && (
                    <Nav className="ml-auto">
                        <Button onClick={handleLogout} variant="danger">Logout</Button>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
