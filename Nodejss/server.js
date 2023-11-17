



// // // // // // // // // const express = require('express');
// // // // // // // // // const mongoose = require('mongoose');
// // // // // // // // // const bodyParser = require('body-parser');
// // // // // // // // // const bcrypt = require('bcrypt');
// // // // // // // // // const cors = require('cors');

// // // // // // // // // const app = express();
// // // // // // // // // const PORT = process.env.PORT || 80;

// // // // // // // // // app.use(cors());
// // // // // // // // // app.use(bodyParser.json());

// // // // // // // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // // // // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // // // // // // //   useNewUrlParser: true,
// // // // // // // // //   useUnifiedTopology: true,
// // // // // // // // // }).then(() => {
// // // // // // // // //   console.log('Connected to MongoDB');
// // // // // // // // // }).catch((error) => {
// // // // // // // // //   console.error('Error connecting to MongoDB:', error);
// // // // // // // // // });

// // // // // // // // // const userSchema = new mongoose.Schema({
// // // // // // // // //   name: String,
// // // // // // // // //   email: String,
// // // // // // // // //   phoneNumber: String,
// // // // // // // // //   username: String,
// // // // // // // // //   password: String,
// // // // // // // // //   userType: String,
// // // // // // // // //   registrationNo: String,
// // // // // // // // // });

// // // // // // // // // const User = mongoose.model('User', userSchema);

// // // // // // // // // app.get('/', (req, res) => {
// // // // // // // // //   res.send('Welcome to the appointment scheduling system.');
// // // // // // // // // });

// // // // // // // // // app.post('/api/register', async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const {
// // // // // // // // //       name,
// // // // // // // // //       email,
// // // // // // // // //       phoneNumber,
// // // // // // // // //       username,
// // // // // // // // //       password,
// // // // // // // // //       userType,
// // // // // // // // //       registrationNo,
// // // // // // // // //     } = req.body;

// // // // // // // // //     const existingUser = await User.findOne({ username });

// // // // // // // // //     if (existingUser) {
// // // // // // // // //       return res.status(400).json({ error: 'Username already exists' });
// // // // // // // // //     }

// // // // // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // // // // //     const newUser = new User({
// // // // // // // // //       name,
// // // // // // // // //       email,
// // // // // // // // //       phoneNumber,
// // // // // // // // //       username,
// // // // // // // // //       password: hashedPassword,
// // // // // // // // //       userType,
// // // // // // // // //       registrationNo,
// // // // // // // // //     });

// // // // // // // // //     await newUser.save();

// // // // // // // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error('Error registering user:', error);
// // // // // // // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // app.post('/api/login', async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { username, password } = req.body;

// // // // // // // // //     const user = await User.findOne({ username });

// // // // // // // // //     if (!user) {
// // // // // // // // //       return res.status(404).json({ error: 'User not found' });
// // // // // // // // //     }

// // // // // // // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // // // // // // //     if (!passwordMatch) {
// // // // // // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // // // // // //     }

// // // // // // // // //     return res.json({ message: 'Login successful' });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error('Error during login:', error);
// // // // // // // // //     return res.status(500).json({ error: 'Login failed' });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // app.listen(PORT, () => {
// // // // // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // // // // });

















// // // // // // // // const express = require('express');
// // // // // // // // const mongoose = require('mongoose');
// // // // // // // // const bodyParser = require('body-parser');
// // // // // // // // const bcrypt = require('bcrypt');
// // // // // // // // const cors = require('cors');

// // // // // // // // const app = express();
// // // // // // // // const PORT = process.env.PORT || 81;

// // // // // // // // app.use(cors());
// // // // // // // // app.use(bodyParser.json());

// // // // // // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // // // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // // // // // //   useNewUrlParser: true,
// // // // // // // //   useUnifiedTopology: true,
// // // // // // // // }).then(() => {
// // // // // // // //   console.log('Connected to MongoDB');
// // // // // // // // }).catch((error) => {
// // // // // // // //   console.error('Error connecting to MongoDB:', error);
// // // // // // // // });

// // // // // // // // const userSchema = new mongoose.Schema({
// // // // // // // //   name: String,
// // // // // // // //   email: String,
// // // // // // // //   phoneNumber: String,
// // // // // // // //   username: String,
// // // // // // // //   password: String,
// // // // // // // //   userType: String,
// // // // // // // //   registrationNo: String,
// // // // // // // // });

// // // // // // // // const User = mongoose.model('User', userSchema);

// // // // // // // // app.get('/', (req, res) => {
// // // // // // // //   res.send('Welcome to the appointment scheduling system.');
// // // // // // // // });

// // // // // // // // app.post('/api/register', async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const {
// // // // // // // //       name,
// // // // // // // //       email,
// // // // // // // //       phoneNumber,
// // // // // // // //       username,
// // // // // // // //       password,
// // // // // // // //       userType,
// // // // // // // //       registrationNo,
// // // // // // // //     } = req.body;

// // // // // // // //     const existingUser = await User.findOne({ username });

// // // // // // // //     if (existingUser) {
// // // // // // // //       return res.status(400).json({ error: 'Username already exists' });
// // // // // // // //     }

// // // // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // // // //     const newUser = new User({
// // // // // // // //       name,
// // // // // // // //       email,
// // // // // // // //       phoneNumber,
// // // // // // // //       username,
// // // // // // // //       password: hashedPassword,
// // // // // // // //       userType,
// // // // // // // //       registrationNo,
// // // // // // // //     });

// // // // // // // //     await newUser.save();

// // // // // // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error('Error registering user:', error);
// // // // // // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // app.post('/api/login', async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { username, password } = req.body;

// // // // // // // //     const user = await User.findOne({ username });

// // // // // // // //     if (!user) {
// // // // // // // //       return res.status(404).json({ error: 'User not found' });
// // // // // // // //     }

// // // // // // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // // // // // //     if (!passwordMatch) {
// // // // // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // // // // //     }

// // // // // // // //     return res.json({ message: 'Login successful' });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error('Error during login:', error);
// // // // // // // //     return res.status(500).json({ error: 'Login failed' });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // // // });




// // // // // // // const express = require('express');
// // // // // // // const mongoose = require('mongoose');
// // // // // // // const bodyParser = require('body-parser');
// // // // // // // const bcrypt = require('bcrypt');
// // // // // // // const cors = require('cors');

// // // // // // // const app = express();
// // // // // // // const PORT = process.env.PORT || 90;

// // // // // // // app.use(cors());
// // // // // // // app.use(bodyParser.json());

// // // // // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // // // // //   useNewUrlParser: true,
// // // // // // //   useUnifiedTopology: true,
// // // // // // // }).then(() => {
// // // // // // //   console.log('Connected to MongoDB');
// // // // // // // }).catch((error) => {
// // // // // // //   console.error('Error connecting to MongoDB:', error);
// // // // // // // });

// // // // // // // const userSchema = new mongoose.Schema({
// // // // // // //   name: String,
// // // // // // //   email: String,
// // // // // // //   phoneNumber: String,
// // // // // // //   username: String,
// // // // // // //   password: String,
// // // // // // //   userType: String,
// // // // // // //   registrationNo: String,
// // // // // // // });

// // // // // // // const User = mongoose.model('User', userSchema);

// // // // // // // // Define a schema and model for doctors
// // // // // // // const doctorSchema = new mongoose.Schema({
// // // // // // //   name: String,
// // // // // // //   specialty: String,
// // // // // // //   availabilityStatus: String,
// // // // // // // });

// // // // // // // const Doctor = mongoose.model('Doctor', doctorSchema);

// // // // // // // // Route to add a new doctor
// // // // // // // app.post('/api/doctors', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { name, specialty, availabilityStatus } = req.body;

// // // // // // //     const newDoctor = new Doctor({
// // // // // // //       name,
// // // // // // //       specialty,
// // // // // // //       availabilityStatus,
// // // // // // //     });

// // // // // // //     await newDoctor.save();

// // // // // // //     return res.status(201).json({ message: 'Doctor added successfully' });
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error adding doctor:', error);
// // // // // // //     return res.status(500).json({ error: 'Unable to add doctor' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.get('/', (req, res) => {
// // // // // // //   res.send('Welcome to the appointment scheduling system.');
// // // // // // // });

// // // // // // // app.post('/api/register', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const {
// // // // // // //       name,
// // // // // // //       email,
// // // // // // //       phoneNumber,
// // // // // // //       username,
// // // // // // //       password,
// // // // // // //       userType,
// // // // // // //       registrationNo,
// // // // // // //     } = req.body;

// // // // // // //     const existingUser = await User.findOne({ username });

// // // // // // //     if (existingUser) {
// // // // // // //       return res.status(400).json({ error: 'Username already exists' });
// // // // // // //     }

// // // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // // //     const newUser = new User({
// // // // // // //       name,
// // // // // // //       email,
// // // // // // //       phoneNumber,
// // // // // // //       username,
// // // // // // //       password: hashedPassword,
// // // // // // //       userType,
// // // // // // //       registrationNo,
// // // // // // //     });

// // // // // // //     await newUser.save();

// // // // // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error registering user:', error);
// // // // // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.post('/api/login', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { username, password } = req.body;

// // // // // // //     const user = await User.findOne({ username });

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ error: 'User not found' });
// // // // // // //     }

// // // // // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // // // // //     if (!passwordMatch) {
// // // // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // // // //     }

// // // // // // //     return res.json({ message: 'Login successful' });
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error during login:', error);
// // // // // // //     return res.status(500).json({ error: 'Login failed' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.get('/api/doctors', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const doctors = await Doctor.find();
// // // // // // //     res.json(doctors);
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error fetching doctors:', error);
// // // // // // //     res.status(500).json({ error: 'Unable to fetch doctors' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.get('/api/available-timings', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const specialty = req.query.specialty;
// // // // // // //     const doctorsWithSpecialty = await Doctor.find({ specialty });
// // // // // // //     const availableTimings = doctorsWithSpecialty
// // // // // // //       .filter((doctor) => doctor.availabilityStatus === 'Available')
// // // // // // //       .map((doctor) => {
// // // // // // //         // Implement logic to calculate available timings for each doctor
// // // // // // //         // For example, generate available timings for the next few hours
// // // // // // //         const currentTime = new Date();
// // // // // // //         const availableTimings = [];
// // // // // // //         for (let i = 1; i <= 4; i++) {
// // // // // // //           const time = new Date(currentTime);
// // // // // // //           time.setHours(currentTime.getHours() + i);
// // // // // // //           availableTimings.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// // // // // // //         }
// // // // // // //         return {
// // // // // // //           doctorName: doctor.name,
// // // // // // //           timings: availableTimings,
// // // // // // //         };
// // // // // // //       });
// // // // // // //     res.json(availableTimings);
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error fetching available timings:', error);
// // // // // // //     res.status(500).json({ error: 'Unable to fetch available timings' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.listen(PORT, () => {
// // // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // // });







// // // // // // const express = require('express');
// // // // // // const mongoose = require('mongoose');
// // // // // // const bodyParser = require('body-parser');
// // // // // // const bcrypt = require('bcrypt');
// // // // // // const cors = require('cors');

// // // // // // const app = express();
// // // // // // const PORT = process.env.PORT || 91;

// // // // // // app.use(cors());
// // // // // // app.use(bodyParser.json());

// // // // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // // // //   useNewUrlParser: true,
// // // // // //   useUnifiedTopology: true,
// // // // // // }).then(() => {
// // // // // //   console.log('Connected to MongoDB');
// // // // // // }).catch((error) => {
// // // // // //   console.error('Error connecting to MongoDB:', error);
// // // // // // });

// // // // // // const userSchema = new mongoose.Schema({
// // // // // //   name: String,
// // // // // //   email: String,
// // // // // //   phoneNumber: String,
// // // // // //   username: String,
// // // // // //   password: String,
// // // // // //   userType: String,
// // // // // //   registrationNo: String,
// // // // // // });

// // // // // // const User = mongoose.model('User', userSchema);

// // // // // // // Define a schema and model for doctors
// // // // // // const doctorSchema = new mongoose.Schema({
// // // // // //   name: String,
// // // // // //   specialty: String,
// // // // // //   availabilityStatus: String,
// // // // // // });

// // // // // // const Doctor = mongoose.model('Doctor', doctorSchema);

// // // // // // app.get('/', (req, res) => {
// // // // // //   res.send('Welcome to the appointment scheduling system.');
// // // // // // });

// // // // // // // Route to fetch doctors (added this route)
// // // // // // app.get('/api/doctors', async (req, res) => {
// // // // // //   try {
// // // // // //     const doctors = await Doctor.find();
// // // // // //     res.json(doctors);
// // // // // //   } catch (error) {
// // // // // //     console.error('Error fetching doctors:', error);
// // // // // //     res.status(500).json({ error: 'Unable to fetch doctors' });
// // // // // //   }
// // // // // // });

// // // // // // app.post('/api/register', async (req, res) => {
// // // // // //   try {
// // // // // //     const {
// // // // // //       name,
// // // // // //       email,
// // // // // //       phoneNumber,
// // // // // //       username,
// // // // // //       password,
// // // // // //       userType,
// // // // // //       registrationNo,
// // // // // //     } = req.body;

// // // // // //     const existingUser = await User.findOne({ username });

// // // // // //     if (existingUser) {
// // // // // //       return res.status(400).json({ error: 'Username already exists' });
// // // // // //     }

// // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // //     const newUser = new User({
// // // // // //       name,
// // // // // //       email,
// // // // // //       phoneNumber,
// // // // // //       username,
// // // // // //       password: hashedPassword,
// // // // // //       userType,
// // // // // //       registrationNo,
// // // // // //     });

// // // // // //     await newUser.save();

// // // // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // // // //   } catch (error) {
// // // // // //     console.error('Error registering user:', error);
// // // // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // // // //   }
// // // // // // });

// // // // // // app.post('/api/login', async (req, res) => {
// // // // // //   try {
// // // // // //     const { username, password } = req.body;

// // // // // //     const user = await User.findOne({ username });

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ error: 'User not found' });
// // // // // //     }

// // // // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // // // //     if (!passwordMatch) {
// // // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // // //     }

// // // // // //     return res.json({ message: 'Login successful' });
// // // // // //   } catch (error) {
// // // // // //     console.error('Error during login:', error);
// // // // // //     return res.status(500).json({ error: 'Login failed' });
// // // // // //   }
// // // // // // });

// // // // // // app.listen(PORT, () => {
// // // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // // });








// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const bodyParser = require('body-parser');
// // // // // const bcrypt = require('bcrypt');
// // // // // const cors = require('cors');

// // // // // const app = express();
// // // // // const PORT = process.env.PORT || 50;

// // // // // app.use(cors());
// // // // // app.use(bodyParser.json());

// // // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // // //   useNewUrlParser: true,
// // // // //   useUnifiedTopology: true,
// // // // // }).then(() => {
// // // // //   console.log('Connected to MongoDB');
// // // // // }).catch((error) => {
// // // // //   console.error('Error connecting to MongoDB:', error);
// // // // // });

// // // // // const userSchema = new mongoose.Schema({
// // // // //   name: String,
// // // // //   email: String,
// // // // //   phoneNumber: String,
// // // // //   username: String,
// // // // //   password: String,
// // // // //   userType: String,
// // // // //   registrationNo: String,
// // // // // });

// // // // // const doctorSchema = new mongoose.Schema({
// // // // //   name: String,
// // // // //   specialty: String,
// // // // //   availabilityStatus: String,
// // // // // });

// // // // // const User = mongoose.model('User', userSchema);
// // // // // const Doctor = mongoose.model('Doctor', doctorSchema);

// // // // // app.get('/', (req, res) => {
// // // // //   res.send('Welcome to the appointment scheduling system.');
// // // // // });

// // // // // app.post('/api/register', async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       name,
// // // // //       email,
// // // // //       phoneNumber,
// // // // //       username,
// // // // //       password,
// // // // //       userType,
// // // // //       registrationNo,
// // // // //     } = req.body;

// // // // //     const existingUser = await User.findOne({ username });

// // // // //     if (existingUser) {
// // // // //       return res.status(400).json({ error: 'Username already exists' });
// // // // //     }

// // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // //     const newUser = new User({
// // // // //       name,
// // // // //       email,
// // // // //       phoneNumber,
// // // // //       username,
// // // // //       password: hashedPassword,
// // // // //       userType,
// // // // //       registrationNo,
// // // // //     });

// // // // //     await newUser.save();

// // // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // // //   } catch (error) {
// // // // //     console.error('Error registering user:', error);
// // // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // // //   }
// // // // // });

// // // // // app.post('/api/login', async (req, res) => {
// // // // //   try {
// // // // //     const { username, password } = req.body;

// // // // //     const user = await User.findOne({ username });

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ error: 'User not found' });
// // // // //     }

// // // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // // //     if (!passwordMatch) {
// // // // //       return res.status(401).json({ error: 'Invalid password' });
// // // // //     }

// // // // //     return res.json({ message: 'Login successful' });
// // // // //   } catch (error) {
// // // // //     console.error('Error during login:', error);
// // // // //     return res.status(500).json({ error: 'Login failed' });
// // // // //   }
// // // // // });

// // // // // app.get('/api/doctors', async (req, res) => {
// // // // //   try {
// // // // //     const doctors = await Doctor.find();
// // // // //     return res.json(doctors);
// // // // //   } catch (error) {
// // // // //     console.error('Error fetching doctors:', error);
// // // // //     return res.status(500).json({ error: 'Unable to fetch doctors' });
// // // // //   }
// // // // // });

// // // // // app.put('/api/doctors/:id', async (req, res) => {
// // // // //   try {
// // // // //     const { id } = req.params;
// // // // //     const { availabilityStatus } = req.body;

// // // // //     const doctor = await Doctor.findById(id);

// // // // //     if (!doctor) {
// // // // //       return res.status(404).json({ error: 'Doctor not found' });
// // // // //     }

// // // // //     doctor.availabilityStatus = availabilityStatus;
// // // // //     await doctor.save();

// // // // //     return res.json({ message: 'Doctor availability updated successfully' });
// // // // //   } catch (error) {
// // // // //     console.error('Error updating doctor availability:', error);
// // // // //     return res.status(500).json({ error: 'Unable to update doctor availability' });
// // // // //   }
// // // // // });

// // // // // app.listen(PORT, () => {
// // // // //   console.log(`Server is running on port ${PORT}`);
// // // // // });





// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const bodyParser = require('body-parser');
// // // // const bcrypt = require('bcrypt');
// // // // const cors = require('cors');

// // // // const app = express();
// // // // const PORT = process.env.PORT || 60;

// // // // app.use(cors());
// // // // app.use(bodyParser.json());

// // // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // }).then(() => {
// // // //   console.log('Connected to MongoDB');
// // // // }).catch((error) => {
// // // //   console.error('Error connecting to MongoDB:', error);
// // // // });

// // // // const userSchema = new mongoose.Schema({
// // // //   name: String,
// // // //   email: String,
// // // //   phoneNumber: String,
// // // //   username: String,
// // // //   password: String,
// // // //   userType: String,
// // // //   registrationNo: String,
// // // //   specialty: String, // Added specialty field for doctors
// // // // });

// // // // const doctorSchema = new mongoose.Schema({
// // // //   name: String,
// // // //   specialty: String,
// // // //   availabilityStatus: String,
// // // // });

// // // // const User = mongoose.model('User', userSchema);
// // // // const Doctor = mongoose.model('Doctor', doctorSchema);

// // // // app.get('/', (req, res) => {
// // // //   res.send('Welcome to the appointment scheduling system.');
// // // // });

// // // // app.post('/api/register', async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       name,
// // // //       email,
// // // //       phoneNumber,
// // // //       username,
// // // //       password,
// // // //       userType,
// // // //       registrationNo,
// // // //       specialty, // Include specialty in the request
// // // //     } = req.body;

// // // //     const existingUser = await User.findOne({ username });

// // // //     if (existingUser) {
// // // //       return res.status(400).json({ error: 'Username already exists' });
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // //     const newUser = new User({
// // // //       name,
// // // //       email,
// // // //       phoneNumber,
// // // //       username,
// // // //       password: hashedPassword,
// // // //       userType,
// // // //       registrationNo,
// // // //       specialty, // Store specialty in the database
// // // //     });

// // // //     await newUser.save();

// // // //     return res.status(201).json({ message: 'User registered successfully' });
// // // //   } catch (error) {
// // // //     console.error('Error registering user:', error);
// // // //     return res.status(500).json({ error: 'Unable to register user' });
// // // //   }
// // // // });

// // // // app.post('/api/login', async (req, res) => {
// // // //   try {
// // // //     const { username, password } = req.body;

// // // //     const user = await User.findOne({ username });

// // // //     if (!user) {
// // // //       return res.status(404).json({ error: 'User not found' });
// // // //     }

// // // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // // //     if (!passwordMatch) {
// // // //       return res.status(401).json({ error: 'Invalid password' });
// // // //     }

// // // //     return res.json({ message: 'Login successful' });
// // // //   } catch (error) {
// // // //     console.error('Error during login:', error);
// // // //     return res.status(500).json({ error: 'Login failed' });
// // // //   }
// // // // });

// // // // app.get('/api/doctors', async (req, res) => {
// // // //   try {
// // // //     const doctors = await Doctor.find();
// // // //     return res.json(doctors);
// // // //   } catch (error) {
// // // //     console.error('Error fetching doctors:', error);
// // // //     return res.status(500).json({ error: 'Unable to fetch doctors' });
// // // //   }
// // // // });

// // // // app.put('/api/doctors/:id', async (req, res) => {
// // // //   try {
// // // //     const { id } = req.params;
// // // //     const { availabilityStatus } = req.body;

// // // //     const doctor = await Doctor.findById(id);

// // // //     if (!doctor) {
// // // //       return res.status(404).json({ error: 'Doctor not found' });
// // // //     }

// // // //     doctor.availabilityStatus = availabilityStatus;
// // // //     await doctor.save();

// // // //     return res.json({ message: 'Doctor availability updated successfully' });
// // // //   } catch (error) {
// // // //     console.error('Error updating doctor availability:', error);
// // // //     return res.status(500).json({ error: 'Unable to update doctor availability' });
// // // //   }
// // // // });

// // // // // Add a new endpoint to fetch available timings based on specialty
// // // // app.get('/api/available-timings', async (req, res) => {
// // // //   try {
// // // //     const { specialty } = req.query;

// // // //     // Logic to calculate available timings based on specialty
// // // //     // You can implement this logic based on your requirements

// // // //     const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM']; // Example timings

// // // //     return res.json(availableTimings);
// // // //   } catch (error) {
// // // //     console.error('Error fetching available timings:', error);
// // // //     return res.status(500).json({ error: 'Unable to fetch available timings' });
// // // //   }
// // // // });

// // // // app.listen(PORT, () => {
// // // //   console.log(`Server is running on port ${PORT}`);
// // // // });










// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // const bcrypt = require('bcrypt');
// // // const cors = require('cors');
// // // const qrcode = require('qrcode');
// // // const twilio = require('twilio');

// // // const app = express();
// // // const PORT = process.env.PORT || 1000;

// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // }).then(() => {
// // //   console.log('Connected to MongoDB');
// // // }).catch((error) => {
// // //   console.error('Error connecting to MongoDB:', error);
// // // });

// // // const userSchema = new mongoose.Schema({
// // //   name: String,
// // //   email: String,
// // //   phoneNumber: String,
// // //   username: String,
// // //   password: String,
// // //   userType: String,
// // //   registrationNo: String,
// // //   specialty: String,
// // // });

// // // const doctorSchema = new mongoose.Schema({
// // //   name: String,
// // //   specialty: String,
// // //   availabilityStatus: String,
// // //   qrCodeData: String,
// // // });

// // // const appointmentSchema = new mongoose.Schema({
// // //   patientID: String,
// // //   doctorID: String,
// // //   specialty: String,
// // //   timing: String,
// // // });

// // // const User = mongoose.model('User', userSchema);
// // // const Doctor = mongoose.model('Doctor', doctorSchema);
// // // const Appointment = mongoose.model('Appointment', appointmentSchema);

// // // // Twilio setup
// // // const twilioAccountSID = 'ACe50c946d62eca8795517aa732087b258';
// // // const twilioAuthToken = '53af098abd309ecc921f88146e8e2288';
// // // const twilioPhoneNumber = '+12564641925';
// // // const twilioClient = twilio(twilioAccountSID, twilioAuthToken);

// // // app.get('/', (req, res) => {
// // //   res.send('Welcome to the appointment scheduling system.');
// // // });

// // // app.post('/api/register', async (req, res) => {
// // //   try {
// // //     const {
// // //       name,
// // //       email,
// // //       phoneNumber,
// // //       username,
// // //       password,
// // //       userType,
// // //       registrationNo,
// // //       specialty,
// // //     } = req.body;

// // //     const existingUser = await User.findOne({ username });

// // //     if (existingUser) {
// // //       return res.status(400).json({ error: 'Username already exists' });
// // //     }

// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     const newUser = new User({
// // //       name,
// // //       email,
// // //       phoneNumber,
// // //       username,
// // //       password: hashedPassword,
// // //       userType,
// // //       registrationNo,
// // //       specialty,
// // //     });

// // //     await newUser.save();

// // //     if (userType === 'doctor') {
// // //       const newDoctor = new Doctor({
// // //         name,
// // //         specialty,
// // //         availabilityStatus: 'Out of Office',
// // //         qrCodeData: '',
// // //       });

// // //       await newDoctor.save();
// // //     }

// // //     return res.status(201).json({ message: 'User registered successfully' });
// // //   } catch (error) {
// // //     console.error('Error registering user:', error);
// // //     return res.status(500).json({ error: 'Unable to register user' });
// // //   }
// // // });

// // // app.post('/api/login', async (req, res) => {
// // //   try {
// // //     const { username, password } = req.body;

// // //     const user = await User.findOne({ username });

// // //     if (!user) {
// // //       return res.status(404).json({ error: 'User not found' });
// // //     }

// // //     const passwordMatch = await bcrypt.compare(password, user.password);

// // //     if (!passwordMatch) {
// // //       return res.status(401).json({ error: 'Invalid password' });
// // //     }

// // //     // Implement your authentication logic to get the patient's ID when they log in
// // //     // For now, I'm returning a placeholder patient ID
// // //     const patientID = '123'; // Replace with the actual patient's ID

// // //     return res.json({ message: 'Login successful', patientID });
// // //   } catch (error) {
// // //     console.error('Error during login:', error);
// // //     return res.status(500).json({ error: 'Login failed' });
// // //   }
// // // });

// // // app.get('/api/doctors', async (req, res) => {
// // //   try {
// // //     const doctors = await Doctor.find();
// // //     return res.json(doctors);
// // //   } catch (error) {
// // //     console.error('Error fetching doctors:', error);
// // //     return res.status(500).json({ error: 'Unable to fetch doctors' });
// // //   }
// // // });

// // // app.put('/api/doctors/:id', async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const { availabilityStatus } = req.body;

// // //     const doctor = await Doctor.findById(id);

// // //     if (!doctor) {
// // //       return res.status(404).json({ error: 'Doctor not found' });
// // //     }

// // //     doctor.availabilityStatus = availabilityStatus;
// // //     await doctor.save();

// // //     return res.json({ message: 'Doctor availability updated successfully' });
// // //   } catch (error) {
// // //     console.error('Error updating doctor availability:', error);
// // //     return res.status(500).json({ error: 'Unable to update doctor availability' });
// // //   }
// // // });

// // // app.get('/api/available-timings', async (req, res) => {
// // //   try {
// // //     const { specialty } = req.query;
// // //     const availableTimings = await calculateAvailableTimings(specialty);
// // //     return res.json(availableTimings);
// // //   } catch (error) {
// // //     console.error('Error fetching available timings:', error);
// // //     return res.status(500).json({ error: 'Unable to fetch available timings' });
// // //   }
// // // });

// // // // Calculate available timings based on specialty (AI logic can be added here)
// // // async function calculateAvailableTimings(specialty) {
// // //   // Placeholder logic, replace with actual AI algorithm
// // //   const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
// // //   return availableTimings;
// // // }

// // // app.post('/api/appointments', async (req, res) => {
// // //   try {
// // //     const { patientID, specialty, timing } = req.body;

// // //     const newAppointment = new Appointment({
// // //       patientID,
// // //       specialty,
// // //       timing,
// // //     });

// // //     await newAppointment.save();

// // //     // Send SMS to the patient for appointment confirmation
// // //     const patient = await User.findById(patientID);

// // //     if (patient && patient.phoneNumber) {
// // //       const message = `Your appointment for ${specialty} at ${timing} has been confirmed.`
// // //       await sendSMS(patient.phoneNumber, message);
// // //     }

// // //     return res.status(201).json({ message: 'Appointment created successfully' });
// // //   } catch (error) {
// // //     console.error('Error creating appointment:', error);
// // //     return res.status(500).json({ error: 'Unable to create appointment' });
// // //   }
// // // });



// // // // Send SMS using Twilio
// // // async function sendSMS(recipientPhoneNumber, message) {
// // //   try {
// // //     await twilioClient.messages.create({
// // //       body: message,
// // //       from: twilioPhoneNumber,
// // //       to: recipientPhoneNumber,
// // //     });
// // //     console.log('SMS sent successfully to:', recipientPhoneNumber);
// // //   } catch (error) {
// // //     console.error('Error sending SMS:', error);
// // //   }
// // // }

// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on port ${PORT}`);
// // // });











// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const bcrypt = require('bcrypt');
// // const cors = require('cors');
// // const twilio = require('twilio');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // app.use(cors());
// // app.use(bodyParser.json());

// // // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// // mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(() => {
// //   console.log('Connected to MongoDB');
// // }).catch((error) => {
// //   console.error('Error connecting to MongoDB:', error);
// // });

// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   phoneNumber: String,
// //   username: String,
// //   password: String,
// //   userType: String,
// //   registrationNo: String,
// //   specialty: String,
// // });

// // const doctorSchema = new mongoose.Schema({
// //   name: String,
// //   specialty: String,
// //   availabilityStatus: String,
// //   qrCodeData: String,
// // });

// // const appointmentSchema = new mongoose.Schema({
// //   patientID: String,
// //   doctorID: String,
// //   specialty: String,
// //   timing: String,
// // });

// // const User = mongoose.model('User', userSchema);
// // const Doctor = mongoose.model('Doctor', doctorSchema);
// // const Appointment = mongoose.model('Appointment', appointmentSchema);

// // // Twilio setup
// // const twilioAccountSID = 'ACe50c946d62eca8795517aa732087b258';
// // const twilioAuthToken = '53af098abd309ecc921f88146e8e2288';
// // const twilioPhoneNumber = '+12564641925';
// // const twilioClient = twilio(twilioAccountSID, twilioAuthToken);

// // app.get('/', (req, res) => {
// //   res.send('Welcome to the appointment scheduling system.');
// // });

// // app.post('/api/register', async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       email,
// //       phoneNumber,
// //       username,
// //       password,
// //       userType,
// //       registrationNo,
// //       specialty,
// //     } = req.body;

// //     const existingUser = await User.findOne({ username });

// //     if (existingUser) {
// //       return res.status(400).json({ error: 'Username already exists' });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const newUser = new User({
// //       name,
// //       email,
// //       phoneNumber,
// //       username,
// //       password: hashedPassword,
// //       userType,
// //       registrationNo,
// //       specialty,
// //     });

// //     await newUser.save();

// //     if (userType === 'doctor') {
// //       const newDoctor = new Doctor({
// //         name,
// //         specialty,
// //         availabilityStatus: 'Out of Office',
// //         qrCodeData: '',
// //       });

// //       await newDoctor.save();
// //     }

// //     return res.status(201).json({ message: 'User registered successfully' });
// //   } catch (error) {
// //     console.error('Error registering user:', error);
// //     return res.status(500).json({ error: 'Unable to register user' });
// //   }
// // });

// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     const user = await User.findOne({ username });

// //     if (!user) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     const passwordMatch = await bcrypt.compare(password, user.password);

// //     if (!passwordMatch) {
// //       return res.status(401).json({ error: 'Invalid password' });
// //     }

// //     // Implement your authentication logic to get the patient's ID when they log in
// //     // For now, I'm returning a placeholder patient ID
// //     const patientID = '123'; // Replace with the actual patient's ID

// //     return res.json({ message: 'Login successful', patientID });
// //   } catch (error) {
// //     console.error('Error during login:', error);
// //     return res.status(500).json({ error: 'Login failed' });
// //   }
// // });

// // app.get('/api/doctors', async (req, res) => {
// //   try {
// //     const doctors = await Doctor.find();
// //     return res.json(doctors);
// //   } catch (error) {
// //     console.error('Error fetching doctors:', error);
// //     return res.status(500).json({ error: 'Unable to fetch doctors' });
// //   }
// // });

// // app.put('/api/doctors/:id', async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { availabilityStatus } = req.body;

// //     const doctor = await Doctor.findById(id);

// //     if (!doctor) {
// //       return res.status(404).json({ error: 'Doctor not found' });
// //     }

// //     doctor.availabilityStatus = availabilityStatus;
// //     await doctor.save();

// //     return res.json({ message: 'Doctor availability updated successfully' });
// //   } catch (error) {
// //     console.error('Error updating doctor availability:', error);
// //     return res.status(500).json({ error: 'Unable to update doctor availability' });
// //   }
// // });

// // app.get('/api/available-timings', async (req, res) => {
// //   try {
// //     const { specialty } = req.query;
// //     const availableTimings = await calculateAvailableTimings(specialty);
// //     return res.json(availableTimings);
// //   } catch (error) {
// //     console.error('Error fetching available timings:', error);
// //     return res.status(500).json({ error: 'Unable to fetch available timings' });
// //   }
// // });

// // // Calculate available timings based on specialty (AI logic can be added here)
// // async function calculateAvailableTimings(specialty) {
// //   // Placeholder logic, replace with actual AI algorithm
// //   const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
// //   return availableTimings;
// // }

// // app.post('/api/appointments', async (req, res) => {
// //   try {
// //     const { patientID, specialty, timing } = req.body;

// //     const newAppointment = new Appointment({
// //       patientID,
// //       specialty,
// //       timing,
// //     });

// //     await newAppointment.save();

// //     // Send SMS to the patient for appointment confirmation
// //     const patient = await User.findById(patientID);

// //     if (patient && patient.phoneNumber) {
// //       const message = `Your appointment for ${specialty} at ${timing} has been confirmed.`
// //       await sendSMS(patient.phoneNumber, message);
// //     }

// //     return res.status(201).json({ message: 'Appointment created successfully' });
// //   } catch (error) {
// //     console.error('Error creating appointment:', error);
// //     return res.status(500).json({ error: 'Unable to create appointment' });
// //   }
// // });

// // // Send SMS using Twilio
// // async function sendSMS(recipientPhoneNumber, message) {
// //   try {
// //     await twilioClient.messages.create({
// //       body: message,
// //       from: twilioPhoneNumber,
// //       to: recipientPhoneNumber,
// //     });
// //     console.log('SMS sent successfully to:', recipientPhoneNumber);
// //   } catch (error) {
// //     console.error('Error sending SMS:', error);
// //   }
// // }

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });




const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

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


//REAL_TIMINGS_UPDATE
let isAvailable = false;

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}

function generateTimings() {
    const timings = [];
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 60); // Start from the next hour

    for (let i = 0; i < 3; i++) {
        timings.push(formatTime(currentTime));
        currentTime.setMinutes(currentTime.getMinutes() + 60); // Increment by one hour
    }

    return timings;
}

app.post('/api/set-status', (req, res) => {
    isAvailable = req.body.status === 'Available';
    res.send({ message: 'Status updated' });
});

app.get('/api/timings', (req, res) => {
    if (isAvailable) {
        res.json({ items: generateTimings() });
    } else {
        res.json({ items: [] });
    }
});
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  

  
  
  
  
  // const express = require('express');
  // const mongoose = require('mongoose');
  // const bodyParser = require('body-parser');
  // const bcrypt = require('bcrypt');
  // const cors = require('cors');
  // const twilio = require('twilio');
  // const Razorpay = require('razorpay'); // Import Razorpay
  

// const app = express();
// const PORT = process.env.PORT || 1000;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB (replace 'your-connection-string' with your MongoDB connection string)
// mongoose.connect('mongodb+srv://Sarang123:Sarang9975@cluster0.efceamn.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// const razorpay = new Razorpay({
//   key_id: 'rzp_test_ImCdA0EQ6mCJqJ', // Replace with your actual Razorpay key ID
//   key_secret: 'vqGl484BO5p1wwq19oMTbzz3', // Replace with your actual Razorpay key secret
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phoneNumber: String,
//   username: String,
//   password: String,
//   userType: String,
//   registrationNo: String,
//   specialty: String,
// });

// const doctorSchema = new mongoose.Schema({
//   name: String,
//   specialty: String,
//   availabilityStatus: String,
//   qrCodeData: String,
// });

// const appointmentSchema = new mongoose.Schema({
//   patientID: String,
//   doctorID: String,
//   specialty: String,
//   timing: String,
// });

// const User = mongoose.model('User', userSchema);
// const Doctor = mongoose.model('Doctor', doctorSchema);
// const Appointment = mongoose.model('Appointment', appointmentSchema);

// // Twilio setup
// const twilioAccountSID = 'ACe50c946d62eca8795517aa732087b258';
// const twilioAuthToken = '53af098abd309ecc921f88146e8e2288';
// const twilioPhoneNumber = '+12564641925';
// const twilioClient = twilio(twilioAccountSID, twilioAuthToken);

// app.get('/', (req, res) => {
//   res.send('Welcome to the appointment scheduling system.');
// });

// app.post('/api/create-order', (req, res) => {
//   try {
//     const { amount } = req.body;

//     const options = {
//       amount, // The amount in paise (e.g., 1000 paise = 10 INR)
//       currency: 'INR',
//       receipt: 'receipt_order_id',
//       payment_capture: 1, // Auto-capture the payment when successful
//     };

//     razorpay.orders.create(options, (err, order) => {
//       if (err) {
//         console.error('Error creating Razorpay order:', err);
//         return res.status(500).json({ error: 'Unable to create Razorpay order' });
//       }

//       return res.json(order);
//     });
//   } catch (error) {
//     console.error('Error creating Razorpay order:', error);
//     return res.status(500).json({ error: 'Unable to create Razorpay order' });
//   }
// });

// app.post('/api/register', async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phoneNumber,
//       username,
//       password,
//       userType,
//       registrationNo,
//       specialty,
//     } = req.body;

//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ error: 'Username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       phoneNumber,
//       username,
//       password: hashedPassword,
//       userType,
//       registrationNo,
//       specialty,
//     });

//     await newUser.save();

//     if (userType === 'doctor') {
//       const newDoctor = new Doctor({
//         name,
//         specialty,
//         availabilityStatus: 'Out of Office',
//         qrCodeData: '',
//       });

//       await newDoctor.save();
//     }

//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     return res.status(500).json({ error: 'Unable to register user' });
//   }
// });

// app.post('/api/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     // Implement your authentication logic to get the patient's ID when they log in
//     // For now, I'm returning a placeholder patient ID
//     const patientID = '123'; // Replace with the actual patient's ID

//     return res.json({ message: 'Login successful', patientID });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ error: 'Login failed' });
//   }
// });

// app.get('/api/doctors', async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
//     return res.json(doctors);
//   } catch (error) {
//     console.error('Error fetching doctors:', error);
//     return res.status(500).json({ error: 'Unable to fetch doctors' });
//   }
// });

// app.put('/api/doctors/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { availabilityStatus } = req.body;

//     const doctor = await Doctor.findById(id);

//     if (!doctor) {
//       return res.status(404).json({ error: 'Doctor not found' });
//     }

//     doctor.availabilityStatus = availabilityStatus;
//     await doctor.save();

//     return res.json({ message: 'Doctor availability updated successfully' });
//   } catch (error) {
//     console.error('Error updating doctor availability:', error);
//     return res.status(500).json({ error: 'Unable to update doctor availability' });
//   }
// });

// app.get('/api/available-timings', async (req, res) => {
//   try {
//     const { specialty } = req.query;
//     const availableTimings = await calculateAvailableTimings(specialty);
//     return res.json(availableTimings);
//   } catch (error) {
//     console.error('Error fetching available timings:', error);
//     return res.status(500).json({ error: 'Unable to fetch available timings' });
//   }
// });

// // Calculate available timings based on specialty (AI logic can be added here)
// async function calculateAvailableTimings(specialty) {
//   // Placeholder logic, replace with actual AI algorithm
//   const availableTimings = ['9:00 AM', '10:00 AM', '11:00 AM'];
//   return availableTimings;
// }

// app.post('/api/appointments', async (req, res) => {
//   try {
//     const { patientID, specialty, timing } = req.body;

//     const newAppointment = new Appointment({
//       patientID,
//       specialty,
//       timing,
//     });

//     await newAppointment.save();
// console.log('Appointment saved:', newAppointment);


//     // Send SMS to the patient for appointment confirmation
//     const patient = await User.findById(patientID);

//     if (patient && patient.phoneNumber) {
//       const message = `Your appointment for ${specialty} at ${timing} has been confirmed.`
//       await sendSMS(patient.phoneNumber, message);
//     }

//     return res.status(201).json({ message: 'Appointment created successfully' });
//   } catch (error) {
//     console.error('Error creating appointment:', error);
//     return res.status(500).json({ error: 'Unable to create appointment' });
//   }
// });

// // Send SMS using Twilio
// async function sendSMS(recipientPhoneNumber, message) {
//   try {
//     await twilioClient.messages.create({
//       body: message,
//       from: twilioPhoneNumber,
//       to: recipientPhoneNumber,
//     });
//     console.log('SMS sent successfully to:', recipientPhoneNumber);
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//   }
// }

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



