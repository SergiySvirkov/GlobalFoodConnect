const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Route to get details of the authenticated user
router.get('/user', UserController.getAuthenticatedUser);

// Route to update the user profile
router.patch('/user', UserController.updateProfile);

module.exports = router;

