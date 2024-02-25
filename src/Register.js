// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Register = () => {
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [phoneNumber, setPhoneNumber] = useState('');
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [userType, setUserType] = useState('patient');
// // //   const [registrationNo, setRegistrationNo] = useState('');
// // //   const [specialty, setSpecialty] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleRegister = async () => {
// // //     try {
// // //       // Make a POST request to the register endpoint on your server
// // //       const response = await fetch('http://localhost:2000/api/register', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({
// // //           name,
// // //           email,
// // //           phoneNumber,
// // //           username,
// // //           password,
// // //           userType,
// // //           registrationNo,
// // //           specialty,
// // //         }),
// // //       });

// // //       if (response.ok) {
// // //         // Redirect to the appropriate page on successful registration
// // //         const data = await response.json();
// // //         alert(data.message);
// // //         navigate('/login');
// // //       } else {
// // //         // Handle registration failure, show an error message
// // //         const errorData = await response.json();
// // //         alert(errorData.error);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error during registration:', error);
// // //       alert('Registration failed. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Register</h2>
// // //       <form>
// // //         <div className="form-group">
// // //           <label htmlFor="name">Name</label>
// // //           <input
// // //             type="text"
// // //             id="name"
// // //             name="name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="email">Email</label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             name="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="phoneNumber">Phone Number</label>
// // //           <input
// // //             type="tel"
// // //             id="phoneNumber"
// // //             name="phoneNumber"
// // //             value={phoneNumber}
// // //             onChange={(e) => setPhoneNumber(e.target.value)}
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="username">Username</label>
// // //           <input
// // //             type="text"
// // //             id="username"
// // //             name="username"
// // //             value={username}
// // //             onChange={(e) => setUsername(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="password">Password</label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label>User Type</label>
// // //           <select
// // //             id="userType"
// // //             name="userType"
// // //             value={userType}
// // //             onChange={(e) => setUserType(e.target.value)}
// // //           >
// // //             <option value="patient">Patient</option>
// // //             <option value="doctor">Doctor</option>
// // //           </select>
// // //         </div>

// // //         {userType === 'doctor' && (
// // //           <div className="form-group">
// // //             <label htmlFor="registrationNo">Registration Number</label>
// // //             <input
// // //               type="text"
// // //               id="registrationNo"
// // //               name="registrationNo"
// // //               value={registrationNo}
// // //               onChange={(e) => setRegistrationNo(e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //         )}

// // //         {userType === 'doctor' && (
// // //           <div className="form-group">
// // //             <label htmlFor="specialty">Specialty</label>
// // //             <input
// // //               type="text"
// // //               id="specialty"
// // //               name="specialty"
// // //               value={specialty}
// // //               onChange={(e) => setSpecialty(e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //         )}

// // //         <button type="button" onClick={handleRegister}>
// // //           Register
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Register;






// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import QRCode from 'qrcode.react'; // Import the QRCode component

// // // // const Register = () => {
// // // //   const [name, setName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [phoneNumber, setPhoneNumber] = useState('');
// // // //   const [username, setUsername] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [userType, setUserType] = useState('patient');
// // // //   const [registrationNo, setRegistrationNo] = useState('');
// // // //   const [specialty, setSpecialty] = useState('');
// // // //   const navigate = useNavigate();
// // // //   const [showQRCode, setShowQRCode] = useState(false); // State to control QR code visibility

// // // //   const handleRegister = async () => {
// // // //     try {
// // // //       // Make a POST request to the register endpoint on your server
// // // //       const response = await fetch('http://localhost:2000/api/register', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           name,
// // // //           email,
// // // //           phoneNumber,
// // // //           username,
// // // //           password,
// // // //           userType,
// // // //           registrationNo,
// // // //           specialty,
// // // //         }),
// // // //       });

// // // //       if (response.ok) {
// // // //         // Redirect to the appropriate page on successful registration
// // // //         const data = await response.json();
// // // //         alert(data.message);

// // // //         // If the user is a doctor, show the QR code
// // // //         if (userType === 'doctor') {
// // // //           setShowQRCode(true);
// // // //         }

// // // //         navigate('/login');
// // // //       } else {
// // // //         // Handle registration failure, show an error message
// // // //         const errorData = await response.json();
// // // //         alert(errorData.error);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error during registration:', error);
// // // //       alert('Registration failed. Please try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Register</h2>
// // // //       <form>
// // // //         <div className="form-group">
// // // //           <label htmlFor="name">Name</label>
// // // //           <input
// // // //             type="text"
// // // //             id="name"
// // // //             name="name"
// // // //             value={name}
// // // //             onChange={(e) => setName(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="form-group">
// // // //           <label htmlFor="email">Email</label>
// // // //           <input
// // // //             type="email"
// // // //             id="email"
// // // //             name="email"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="form-group">
// // // //           <label htmlFor="phoneNumber">Phone Number</label>
// // // //           <input
// // // //             type="tel"
// // // //             id="phoneNumber"
// // // //             name="phoneNumber"
// // // //             value={phoneNumber}
// // // //             onChange={(e) => setPhoneNumber(e.target.value)}
// // // //           />
// // // //         </div>

// // // //         <div className="form-group">
// // // //           <label htmlFor="username">Username</label>
// // // //           <input
// // // //             type="text"
// // // //             id="username"
// // // //             name="username"
// // // //             value={username}
// // // //             onChange={(e) => setUsername(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="form-group">
// // // //           <label htmlFor="password">Password</label>
// // // //           <input
// // // //             type="password"
// // // //             id="password"
// // // //             name="password"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="form-group">
// // // //           <label>User Type</label>
// // // //           <select
// // // //             id="userType"
// // // //             name="userType"
// // // //             value={userType}
// // // //             onChange={(e) => setUserType(e.target.value)}
// // // //           >
// // // //             <option value="patient">Patient</option>
// // // //             <option value="doctor">Doctor</option>
// // // //           </select>
// // // //         </div>

// // // //         {userType === 'doctor' && (
// // // //           <div>
// // // //             <div className="form-group">
// // // //               <label htmlFor="registrationNo">Registration Number</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="registrationNo"
// // // //                 name="registrationNo"
// // // //                 value={registrationNo}
// // // //                 onChange={(e) => setRegistrationNo(e.target.value)}
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="form-group">
// // // //               <label htmlFor="specialty">Specialty</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="specialty"
// // // //                 name="specialty"
// // // //                 value={specialty}
// // // //                 onChange={(e) => setSpecialty(e.target.value)}
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <button onClick={handleRegister}>Register</button>
// // // //           </div>
// // // //         )}

// // // //         {showQRCode && userType === 'doctor' && (
// // // //           <div>
// // // //             <h3>Your QR Code</h3>
// // // //             {/* Render the QR code with the doctor's details */}
// // // //             <QRCode
// // // //               value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
// // // //               size={128}
// // // //             />
// // // //             <br />
// // // //             {/* Add an option to download the QR code */}
// // // //             <a
// // // //               href={`data:image/svg+xml,${encodeURIComponent(
// // // //                 <QRCode
// // // //                   value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
// // // //                 />
// // // //               )}`}
// // // //               download="doctor_qr_code.svg"
// // // //             >
// // // //               Download QR Code
// // // //             </a>
// // // //           </div>
// // // //         )}
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;










// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import QRCode from 'qrcode.react'; // Import the QRCode component

// // // const Register = () => {
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [phoneNumber, setPhoneNumber] = useState('');
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [userType, setUserType] = useState('patient');
// // //   const [registrationNo, setRegistrationNo] = useState('');
// // //   const [specialty, setSpecialty] = useState('');
// // //   const navigate = useNavigate();
// // //   const [showQRCode, setShowQRCode] = useState(false); // State to control QR code visibility

// // //   const handleRegister = async () => {
// // //     try {
// // //       // Make a POST request to the register endpoint on your server
// // //       const response = await fetch('http://localhost:2000/api/register', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({
// // //           name,
// // //           email,
// // //           phoneNumber,
// // //           username,
// // //           password,
// // //           userType,
// // //           registrationNo,
// // //           specialty,
// // //         }),
// // //       });

// // //       if (response.ok) {
// // //         // Redirect to the appropriate page on successful registration
// // //         const data = await response.json();
// // //         alert(data.message);

// // //         // If the user is a doctor, show the QR code
// // //         if (userType === 'doctor') {
// // //           setShowQRCode(true);
// // //         }

// // //         navigate('/login');
// // //       } else {
// // //         // Handle registration failure, show an error message
// // //         const errorData = await response.json();
// // //         alert(errorData.error);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error during registration:', error);
// // //       alert('Registration failed. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Register</h2>
// // //       <form>
// // //         <div className="form-group">
// // //           <label htmlFor="name">Name</label>
// // //           <input
// // //             type="text"
// // //             id="name"
// // //             name="name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="email">Email</label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             name="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="phoneNumber">Phone Number</label>
// // //           <input
// // //             type="tel"
// // //             id="phoneNumber"
// // //             name="phoneNumber"
// // //             value={phoneNumber}
// // //             onChange={(e) => setPhoneNumber(e.target.value)}
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="username">Username</label>
// // //           <input
// // //             type="text"
// // //             id="username"
// // //             name="username"
// // //             value={username}
// // //             onChange={(e) => setUsername(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label htmlFor="password">Password</label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div className="form-group">
// // //           <label>User Type</label>
// // //           <select
// // //             id="userType"
// // //             name="userType"
// // //             value={userType}
// // //             onChange={(e) => setUserType(e.target.value)}
// // //           >
// // //             <option value="patient">Patient</option>
// // //             <option value="doctor">Doctor</option>
// // //           </select>
// // //         </div>

// // //         {userType === 'doctor' && (
// // //           <div>
// // //             <div className="form-group">
// // //               <label htmlFor="registrationNo">Registration Number</label>
// // //               <input
// // //                 type="text"
// // //                 id="registrationNo"
// // //                 name="registrationNo"
// // //                 value={registrationNo}
// // //                 onChange={(e) => setRegistrationNo(e.target.value)}
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="form-group">
// // //               <label htmlFor="specialty">Specialty</label>
// // //               <input
// // //                 type="text"
// // //                 id="specialty"
// // //                 name="specialty"
// // //                 value={specialty}
// // //                 onChange={(e) => setSpecialty(e.target.value)}
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //         )}

// // //         <button onClick={handleRegister}>Register</button>
        
// // //         {showQRCode && userType === 'doctor' && (
// // //           <div>
// // //             <h3>Your QR Code</h3>
// // //             {/* Render the QR code with the doctor's details */}
// // //             <QRCode
// // //               value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
// // //               size={128}
// // //             />
// // //             <br />
// // //             {/* Add an option to download the QR code */}
// // //             <a
// // //               href={`data:image/svg+xml,${encodeURIComponent(
// // //                 <QRCode
// // //                   value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
// // //                 />
// // //               )}`}
// // //               download="doctor_qr_code.svg"
// // //             >
// // //               Download QR Code
// // //             </a>
// // //           </div>
// // //         )}
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Register;









// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import QRCode from 'qrcode.react';

// // const Register = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [userType, setUserType] = useState('patient');
// //   const [registrationNo, setRegistrationNo] = useState('');
// //   const [specialty, setSpecialty] = useState('');
// //   const navigate = useNavigate();
// //   const [showQRCode, setShowQRCode] = useState(false);

// //   const handleRegister = async () => {
// //     try {
// //       const response = await fetch('http://localhost:2000/api/register', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           name,
// //           email,
// //           phoneNumber,
// //           username,
// //           password,
// //           userType,
// //           registrationNo,
// //           specialty,
// //         }),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         alert(data.message);

// //         if (userType === 'doctor') {
// //           setShowQRCode(true); // Show the QR code for doctors
// //         }

// //         navigate('/login');
// //       } else {
// //         const errorData = await response.json();
// //         alert(errorData.error);
// //       }
// //     } catch (error) {
// //       console.error('Error during registration:', error);
// //       alert('Registration failed. Please try again.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <form>
// //         <div className="form-group">
// //           <label htmlFor="name">Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {/* Other form fields for email, phone number, username, password, and user type */}
// //         {/* ...

// //         {/* Additional fields for doctors (registration number and specialty) */}
// //         {userType === 'doctor' && (
// //           <div className="form-group">
// //             <label htmlFor="registrationNo">Registration Number</label>
// //             <input
// //               type="text"
// //               id="registrationNo"
// //               name="registrationNo"
// //               value={registrationNo}
// //               onChange={(e) => setRegistrationNo(e.target.value)}
// //               required
// //             />
// //           </div>
// //         )}

// //         {userType === 'doctor' && (
// //           <div className="form-group">
// //             <label htmlFor="specialty">Specialty</label>
// //             <input
// //               type="text"
// //               id="specialty"
// //               name="specialty"
// //               value={specialty}
// //               onChange={(e) => setSpecialty(e.target.value)}
// //               required
// //             />
// //           </div>
// //         )}

// //         <button onClick={handleRegister}>Register</button>

// //         {showQRCode && userType === 'doctor' && (
// //           <div>
// //             <h3>Your QR Code</h3>
// //             <QRCode
// //               value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
// //               size={128}
// //             />
// //           </div>
// //         )}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import QRCode from 'qrcode.react';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('patient');
//   const [registrationNo, setRegistrationNo] = useState('');
//   const [specialty, setSpecialty] = useState('');
//   const navigate = useNavigate();
//   const [showQRCode, setShowQRCode] = useState(false);
//   const [qrCodeValue, setQRCodeValue] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await fetch('http://localhost:2000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phoneNumber,
//           username,
//           password,
//           userType,
//           registrationNo: userType === 'doctor' ? registrationNo : '', // Include registrationNo for doctors only
//           specialty: userType === 'doctor' ? specialty : '', // Include specialty for doctors only
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);

//         if (userType === 'doctor') {
//           setQRCodeValue(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`);
//           setShowQRCode(true);
//         }

//         navigate('/login');
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   const handleDownloadQRCode = () => {
//     // Create a data URI and trigger a download
//     const canvas = document.querySelector('canvas');
//     const dataURL = canvas.toDataURL('image/png');
//     const a = document.createElement('a');
//     a.href = dataURL;
//     a.download = 'qrcode.png';
//     a.click();
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>User Type</label>
//           <select
//             id="userType"
//             name="userType"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//           </select>
//         </div>

//         {userType === 'doctor' && (
//           <div>
//             <div className="form-group">
//               <label htmlFor="registrationNo">Registration Number</label>
//               <input
//                 type="text"
//                 id="registrationNo"
//                 name="registrationNo"
//                 value={registrationNo}
//                 onChange={(e) => setRegistrationNo(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="specialty">Specialty</label>
//               <input
//                 type="text"
//                 id="specialty"
//                 name="specialty"
//                 value={specialty}
//                 onChange={(e) => setSpecialty(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//         )}

//         <button type="button" onClick={handleRegister}>
//           Register
//         </button>

//         {showQRCode && userType === 'doctor' && (
//           <div>
//             <h3>Your QR Code</h3>
//             <QRCode value={qrCodeValue} size={128} />
//             <div>
//               <button onClick={handleDownloadQRCode}>Download or Copy QR Code</button>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Register;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './Register.css';
import doct1 from './Rejs2.png';





const Register = () => {
  // State variables to manage form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const [registrationNo, setRegistrationNo] = useState('');
  const [specialty, setSpecialty] = useState('');
  const navigate = useNavigate();
  const [showQRCode, setShowQRCode] = useState(false);

  // Function to handle registration
  const handleRegister = async () => {
    try {
      // Make a POST request to the registration endpoint on your server
      const response = await fetch('https://arogyaconnectdemo.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          username,
          password,
          userType,
          registrationNo,
          specialty,
        }),
      });

      if (response.ok) {
        // Registration successful
        const data = await response.json();
        alert(data.message);

        // If the user is a doctor, show the QR code
        if (userType === 'doctor') {
          setShowQRCode(true);
        }
      } else {
        // Registration failed, show an error message
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  // Function to download the QR code as an image
  const downloadQRCode = () => {
    const canvas = document.querySelector('canvas');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.setAttribute('download', 'qr-code.png');
    link.setAttribute('href', image);
    link.click();
  };

  return (
    
    <div className='register-container'> 
    
    <div className='resistor'>
      <h2 className='intro'>Get Access to Simplified Healthcare Now !!</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>User Type</label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {userType === 'doctor' && (
          <div>
            <div className="form-group">
              <label htmlFor="registrationNo">Registration Number</label>
              <input
                type="text"
                id="registrationNo"
                name="registrationNo"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialty">Specialty</label>
              <input
                type="text"
                id="specialty"
                name="specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <button type="button" onClick={handleRegister}>
          Register
        </button>

        {showQRCode && userType === 'doctor' && (
          <div>
            <h3>Your QR Code</h3>
            <QRCode
              value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
              size={128}
            />
            <button type="button" onClick={downloadQRCode}>
              Download QR Code
            </button>
          </div>
        )}

        <button type="button" onClick={() => navigate('/login')}>
          Go to Login
        </button>
      </form>
    </div>
    <div className='register-image'> {/* This will contain the image */}
     <img src={doct1} alt='fsa'></img>
      </div>
      
    </div>
    
  );
};

export default Register;

