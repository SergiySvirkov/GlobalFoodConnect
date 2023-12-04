const User = require('../models/User');

const UserController = {
  // Get details of the currently authenticated user
  getAuthenticatedUser: async (req, res) => {
    try {
      // The user information is available in req.user if authentication is implemented
      // Replace this with your actual authentication logic
      const userId = req.user;

      if (!userId) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update user profile
  updateProfile: async (req, res) => {
    try {
      // The user information is available in req.user if authentication is implemented
      // Replace this with your actual authentication logic
      const userId = req.user;

      if (!userId) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      const { username, email, // Add more user properties as needed
      } = req.body;

      // Update the user profile
      await User.findByIdAndUpdate(userId, { username, email }, { new: true });

      res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = UserController;

