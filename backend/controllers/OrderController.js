const Order = require('../models/Order');

const OrderController = {
  // Get a list of all orders
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get details of a specific order
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);

      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(200).json(order);
    } catch (error) {
      console.error('Error fetching order details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Place a new order
  placeOrder: async (req, res) => {
    try {
      const { dishes, // Add more order properties as needed
      } = req.body;

      // Create a new order
      const newOrder = new Order({
        dishes,
        // Add more order properties as needed
      });

      // Save the order to the database
      await newOrder.save();

      res.status(201).json({ message: 'Order placed successfully', orderId: newOrder._id });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = OrderController;

