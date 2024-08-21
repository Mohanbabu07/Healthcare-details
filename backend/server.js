// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  phone: String,
  email: String,
  picture: String,
  patientId: String,
  affectedSide: String,
  condition: String,
  speciality: String,
  medicalHistory: String,
  goalReached: Number, // Percentage from 0 to 100
});

const User = mongoose.model('User', UserSchema);

// GET User data
app.get('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});