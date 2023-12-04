const express = require('express');
const RestaurantController = require('../controllers/RestaurantController');

const router = express.Router();

// Route to get all restaurants
router.get('/restaurants', RestaurantController.getAllRestaurants);

// Route to get details of a specific restaurant
router.get('/restaurants/:id', RestaurantController.getRestaurantById);

// Route to add a new restaurant
router.post('/restaurants', RestaurantController.addRestaurant);

module.exports = router;

