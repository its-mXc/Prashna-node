import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Prashna</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header