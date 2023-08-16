// src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to register user.' });
  }
};

// Login an existing user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    const token = jwt.sign({ username: user.username, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d', // Token expires in 1 day
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Unable to log in.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
