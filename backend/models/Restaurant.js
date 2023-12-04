const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more restaurant properties as needed
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;

