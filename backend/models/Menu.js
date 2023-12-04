const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  dishes: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      // Add more dish-related properties as needed
    },
  ],
  // Add more menu properties as needed
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
