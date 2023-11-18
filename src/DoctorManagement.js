// // // Import necessary libraries
// // import React, { useState, useEffect } from 'react';
// // import qrcode from 'qrcode';
// // import axios from 'axios';
// // import twilio from 'twilio';

// // function DoctorManagement() {
// //   const [doctor, setDoctor] = useState(null);
// //   const [availabilityStatus, setAvailabilityStatus] = useState('Available');
// //   const [availableTimings, setAvailableTimings] = useState([]);
// //   const [qrCodeData, setQRCodeData] = useState('');
// //   const [patientPhoneNumber, setPatientPhoneNumber] = useState('');

// //   useEffect(() => {
// //     // Fetch the logged-in doctor's details when the component mounts
// //     axios.get('http://localhost:2000/api/doctor')
// //       .then((response) => {
// //         setDoctor(response.data);
// //         setAvailabilityStatus(response.data.availabilityStatus);
// //         setQRCodeData(JSON.stringify(response.data));

// //         // Fetch the patient's phone number based on their ID
// //         axios.get(`http://localhost:2000/api/patient/${getLoggedInPatientId()}/phone`)
// //           .then((patientResponse) => {
// //             setPatientPhoneNumber(patientResponse.data.phone);
// //           })
// //           .catch((patientError) => {
// //             console.error('Error fetching patient phone number:', patientError);
// //           });
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching doctor details:', error);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     // Logic to calculate available timings based on the availability status
// //     const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM']; // Example timings
// //     setAvailableTimings(availableTimings);
// //   }, [availabilityStatus]);

// //   const generateQRCode = () => {
// //     qrcode.toDataURL(qrCodeData, (err, url) => {
// //       if (err) {
// //         console.error('Error generating QR code:', err);
// //       } else {
// //         axios.post('http://localhost:2000/api/doctor/qrcode', { qrCodeData: url })
// //           .then(() => {
// //             console.log('QR code generated and saved successfully');
// //           })
// //           .catch((error) => {
// //             console.error('Error saving QR code:', error);
// //           });
// //       }
// //     });
// //   };

// //   const handleAvailabilityChange = (newAvailability) => {
// //     axios.put(`http://localhost:2000/api/doctor/${doctor._id}`, {
// //       availabilityStatus: newAvailability,
// //     })
// //       .then(() => {
// //         setAvailabilityStatus(newAvailability);
// //       })
// //       .catch((error) => {
// //         console.error('Error updating availability status:', error);
// //       });
// //   };

// //   const sendSMS = () => {
// //     const recipientPhoneNumber = patientPhoneNumber; // Use the fetched patient phone number

// //     const accountSid = 'ACe50c946d62eca8795517aa732087b258';
// //     const authToken = '53af098abd309ecc921f88146e8e2288';
// //     const twilioPhoneNumber = '+12564641925';
// //     const client = twilio(accountSid, authToken);

// //     client.messages.create({
// //       body: 'Your appointment has been confirmed.',
// //       from: twilioPhoneNumber,
// //       to: recipientPhoneNumber,
// //     })
// //       .then(() => {
// //         console.log('SMS sent successfully');
// //       })
// //       .catch((error) => {
// //         console.error('Error sending SMS:', error);
// //       });
// //   };

// //   // Replace this function with your actual user authentication logic
// //   const getLoggedInPatientId = () => {
// //     // Implement your authentication logic to get the patient's ID when they log in
// //     // For example, if you're using JWT tokens, you can extract the patient ID from the token.
// //     // You might need to use a state management library like Redux or React Context to store the token.
// //     // Here, I'm using a placeholder ID for demonstration purposes.
// //     const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
// //     if (token) {
// //       const decodedToken = decodeToken(token); // Replace this with your JWT decoding logic
// //       if (decodedToken && decodedToken.patientId) {
// //         return decodedToken.patientId;
// //       }
// //     }
// //     return null; // Return null if patient is not authenticated
// //   };

// //   // Placeholder function for decoding JWT tokens
// //   const decodeToken = (token) => {
// //     // Implement your JWT decoding logic here
// //     // This is a simplified example; you should use a proper JWT library
// //     try {
// //       const decoded = JSON.parse(atob(token.split('.')[1]));
// //       return decoded;
// //     } catch (error) {
// //       console.error('Error decoding JWT token:', error);
// //       return null;
// //     }
// //   };

// //   // Simplified AI feature: Suggest next available appointment time
// //   const suggestNextAppointment = () => {
// //     // Replace this logic with your AI algorithm to suggest the next available appointment
// //     const nextAppointmentTime = '2:00 PM'; // Example suggestion
// //     alert(`Suggested next appointment time: ${nextAppointmentTime}`);
// //   };

// //   return (
// //     <div>
// //       <h2>Welcome, {doctor ? doctor.name : 'Doctor'}</h2>
// //       <label>Availability Status:</label>
// //       <select
// //         value={availabilityStatus}
// //         onChange={(e) => handleAvailabilityChange(e.target.value)}
// //       >
// //         <option value="Available">Available</option>
// //         <option value="On Break">On Break</option>
// //         <option value="Out of Office">Out of Office</option>
// //       </select>
// //       <h3>Available Timings:</h3>
// //       <ul>
// //         {availableTimings.map((timing) => (
// //           <li key={timing}>{timing}</li>
// //         ))}
// //       </ul>
// //       {doctor && (
// //         <div>
// //           <button onClick={generateQRCode}>Generate QR Code</button>
// //           <img src={qrCodeData} alt="QR Code" />
// //         </div>
// //       )}
// //       <button onClick={sendSMS}>Send Confirmation SMS</button>
// //       <button onClick={suggestNextAppointment}>Suggest Next Appointment</button>
// //     </div>
// //   );
// // }

// // export default DoctorManagement;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DoctorManagement() {
//   const [doctor, setDoctor] = useState(null);
//   const [availabilityStatus, setAvailabilityStatus] = useState('Available');
//   const [availableTimings, setAvailableTimings] = useState([]);
//   const [qrCodeData, setQRCodeData] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:1000/api/doctor')
//       .then((response) => {
//         setDoctor(response.data);
//         setAvailabilityStatus(response.data.availabilityStatus);
//         setQRCodeData(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.error('Error fetching doctor details:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
//     setAvailableTimings(availableTimings);
//   }, [availabilityStatus]);

//   const generateQRCode = () => {
//     // Generate and save QR code logic remains unchanged
//   };

//   const handleAvailabilityChange = (newAvailability) => {
//     axios.put(`http://localhost:1000/api/doctor/${doctor._id}`, {
//       availabilityStatus: newAvailability,
//     })
//       .then(() => {
//         setAvailabilityStatus(newAvailability);
//       })
//       .catch((error) => {
//         console.error('Error updating availability status:', error);
//       });
//   };

//   const suggestNextAppointment = () => {
//     // Suggest next appointment time logic remains unchanged
//   };

//   return (
//     <div>
//       <h2>Welcome, {doctor ? doctor.name : 'Doctor'}</h2>
//       <label>Availability Status:</label>
//       <select
//         value={availabilityStatus}
//         onChange={(e) => handleAvailabilityChange(e.target.value)}
//       >
//         <option value="Available">Available</option>
//         <option value="On Break">On Break</option>
//         <option value="Out of Office">Out of Office</option>
//       </select>
//       <h3>Available Timings:</h3>
//       <ul>
//         {availableTimings.map((timing) => (
//           <li key={timing}>{timing}</li>
//         ))}
//       </ul>
//       {doctor && (
//         <div>
//           <button onClick={generateQRCode}>Generate QR Code</button>
//           <img src={qrCodeData} alt="QR Code" />
//         </div>
//       )}
//       <button onClick={suggestNextAppointment}>Suggest Next Appointment</button>
//     </div>
//   );
// }

// export default DoctorManagement;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DoctorManagement.css';
import pic from './Project.png'
import { useStatus } from './StatusContext';
//import { TimingsProvider } from './TimingsContext';
//import TestTime from './TestTime';


function DoctorManagement() {
  const [doctor, setDoctor] = useState(null);
  const { status, setStatus } = useStatus(); // Use context for status
  const [availabilityStatus, setAvailabilityStatus] = useState('Available');
  const [availableTimings, setAvailableTimings] = useState([]);
  const [qrCodeData, setQRCodeData] = useState('');
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState('');

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setStatus(selectedValue);

        // Inform the server about the status change
        // The server should handle this to make data available for TestTime
        fetch('http://localhost:1000/api/set-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: selectedValue }),
        })
        .catch(error => console.error('Error:', error));
    };

  useEffect(() => {
    axios.get('http://localhost:1000/api/doctor')
      .then((response) => {
        console.log("Doctor Data:", response.data); // Debugging log
        setDoctor(response.data);
        setAvailabilityStatus(response.data.availabilityStatus);
        setQRCodeData(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error('Error fetching doctor details:', error);
      });
  }, []);

  useEffect(() => {
    const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
    setAvailableTimings(availableTimings);
  }, [availabilityStatus]);

  const generateQRCode = () => {
    // Generate and save QR code logic remains unchanged
  };

  const handleAvailabilityChange = (newAvailability) => {
    axios.put(`http://localhost:1000/api/doctor/${doctor._id}`, {
      availabilityStatus: newAvailability,
    })
      .then(() => {
        setAvailabilityStatus(newAvailability);
      })
      .catch((error) => {
        console.error('Error updating availability status:', error);
      });
  };

  const suggestNextAppointment = () => {
    // Suggest next appointment time logic remains unchanged
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
   
    <div className="main-content">
      <aside className="sidebar">
        <div className="sidebar-item">Dashboard</div>
        <div className="sidebar-item">Patients</div>
        <div className="sidebar-item">Schedule</div>
        <div className="sidebar-item">Settings</div>
      </aside>
      <div className="content-area">
        <div className="greeting-header">
        <div>Welcome, {doctor ? `Dr. ${doctor.name}` : 'Doctor'}</div>
          <div>
          <img src={pic} alt="Doctors" className="header-image" />

            <label>Availability Status:</label>
            <select
              value={status}
              onChange={handleSelectChange}
            >
              <option value="Select Status">Select Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">On Break</option>
              <option value="Not Available">Out of Office</option>
            </select>
          </div>
        </div>
        <div className="stats-cards-container">
          <div className="stats-card"><b>09</b> Pending Appointments</div>
          <div className="stats-card"><b>19</b> Today's Appointments</div>
          <div className="stats-card"><b>34</b> Total Appointments</div>
        </div>
        {/* The appointments list and other content should go here */}
        <div className="appointments-list">
          {/* Dynamic list of appointments */}
        </div>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  </div>
);
}

export default DoctorManagement;
