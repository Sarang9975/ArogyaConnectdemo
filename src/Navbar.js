// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Arogclogo.png'; // make sure the logo path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
  <Link to="/homepage" className="logo-link">
    <img src={logo} alt="Logo" />
  </Link>
</div>


      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/register">Home</Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/patientappointments">Book Appointments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/doctormanagement">Doctor Management</Link>
        </li>
        <li className="navbar-item">
          <Link to="/homepage">Hospital Management</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
