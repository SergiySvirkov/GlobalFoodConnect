const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const AuthController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ error: 'Email already in use' });
      }

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Create a JWT token
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', {
        expiresIn: '1h', // Adjust the expiration time as needed
      });

      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = AuthController;
