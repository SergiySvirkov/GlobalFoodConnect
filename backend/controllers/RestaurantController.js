const Restaurant = require('../models/Restaurant');

const RestaurantController = {
  // Get a list of all restaurants
  getAllRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.status(200).json(restaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get details of a specific restaurant
  getRestaurantById: async (req, res) => {
    try {
      const { id } = req.params;
      const restaurant = await Restaurant.findById(id);

      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      res.status(200).json(restaurant);
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Add a new restaurant
  addRestaurant: async (req, res) => {
    try {
      const { name, description, // Add more restaurant properties as needed
      } = req.body;

      // Create a new restaurant
      const newRestaurant = new Restaurant({
        name,
        description,
        // Add more restaurant properties as needed
      });

      // Save the restaurant to the database
      await newRestaurant.save();

      res.status(201).json({ message: 'Restaurant added successfully' });
    } catch (error) {
      console.error('Error adding restaurant:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = RestaurantController;

