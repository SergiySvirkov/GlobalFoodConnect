const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  dishes: [
    {
      id: { type: Schema.Types.ObjectId, ref: 'Dish' },
      quantity: { type: Number, default: 1 },
      // Add more dish-related properties as needed
    },
  ],
  // Add more order properties as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

