/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const twilio = require('twilio');

const app = express();


app.use(cors());
app.use(bodyParser.json());

const admin = require('firebase-admin');
admin.initializeApp();

// Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  username: String,
  password: String,
  userType: String,
  registrationNo: String,
  specialty: String,
});

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  availabilityStatus: String,
  qrCodeData: String,
});

const appointmentSchema = new mongoose.Schema({
  patientID: String,
  doctorID: String,
  specialty: String,
  timing: String,
});

const User = mongoose.model('User', userSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Twilio setup
const twilioAccountSID = 'ACe50c946d62eca8795517aa732087b258';
const twilioAuthToken = '53af098abd309ecc921f88146e8e2288';
const twilioPhoneNumber = '+12564641925';
const twilioClient = twilio(twilioAccountSID, twilioAuthToken);

app.get('/', (req, res) => {
  res.send('Welcome to the appointment scheduling system.');
});

app.post('/api/register', async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      username,
      password,
      userType,
      registrationNo,
      specialty,
    } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phoneNumber,
      username,
      password: hashedPassword,
      userType,
      registrationNo,
      specialty,
    });

    await newUser.save();

    if (userType === 'doctor') {
      const newDoctor = new Doctor({
        name,
        specialty,
        availabilityStatus: 'Out of Office',
        qrCodeData: '',
      });

      await newDoctor.save();
    }

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Unable to register user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Implement your authentication logic to get the patient's ID when they log in
    // For now, I'm returning a placeholder patient ID
    const patientID = '123'; // Replace with the actual patient's ID

    return res.json({ message: 'Login successful', patientID });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return res.status(500).json({ error: 'Unable to fetch doctors' });
  }
});

app.put('/api/doctors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { availabilityStatus } = req.body;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctor.availabilityStatus = availabilityStatus;
    await doctor.save();

    return res.json({ message: 'Doctor availability updated successfully' });
  } catch (error) {
    console.error('Error updating doctor availability:', error);
    return res.status(500).json({ error: 'Unable to update doctor availability' });
  }
});

app.get('/api/available-timings', async (req, res) => {
  try {
    const { specialty } = req.query;
    const availableTimings = await calculateAvailableTimings(specialty);
    return res.json(availableTimings);
  } catch (error) {
    console.error('Error fetching available timings:', error);
    return res.status(500).json({ error: 'Unable to fetch available timings' });
  }
});

// Calculate available timings based on specialty (AI logic can be added here)
async function calculateAvailableTimings(specialty) {
  // Placeholder logic, replace with actual AI algorithm
  const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
  return availableTimings;
}

app.post('/api/appointments', async (req, res) => {
  try {
    const { patientID, specialty, timing } = req.body;

    const newAppointment = new Appointment({
      patientID,
      specialty,
      timing,
    });

    await newAppointment.save();
console.log('Appointment saved:', newAppointment);


    // Send SMS to the patient for appointment confirmation
    const patient = await User.findById(patientID);

    if (patient && patient.phoneNumber) {
      const message = `Your appointment for ${specialty} at ${timing} has been confirmed.`
      await sendSMS(patient.phoneNumber, message);
    }

    return res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ error: 'Unable to create appointment' });
  }
});

// Send SMS using Twilio
async function sendSMS(recipientPhoneNumber, message) {
  try {
    await twilioClient.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: recipientPhoneNumber,
    });
    console.log('SMS sent successfully to:', recipientPhoneNumber);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

exports.api = functions.https.onRequest(app);


