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
import { StatusProvider } from './StatusContext';
function App() {
  const [user, setUser] = useState(null);
  //Added some inline styline so due to removal of Login and Register Links
  const mainContentStyle = {
    marginTop: "65px", // Adjust this value based on your navbar's height
  };

  return (
    <StatusProvider>
    <Router>
      <Navbar />
      <div className="App" style={mainContentStyle}>
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
    </StatusProvider>
  );
}

export default App;
