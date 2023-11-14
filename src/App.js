import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Login.js';
import Register from './Register';
import PatientAppointments from './PatientAppointments';
import DoctorManagement from './DoctorManagement';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import About from './About.js';
function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/patientappointments" element={<PatientAppointments />} />
          <Route path="/doctormanagement" element={<DoctorManagement />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          {user ? (
            <Route path="/*" element={<Navigate to="/patientappointments" />} />
          ) : (
            <Route path="/*" element={<Navigate to="/homepage" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
