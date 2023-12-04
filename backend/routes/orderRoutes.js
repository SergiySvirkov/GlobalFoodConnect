const express = require('express');
const OrderController = require('../controllers/OrderController');

const router = express.Router();

// Route to get all orders
router.get('/orders', OrderController.getAllOrders);

// Route to get details of a specific order
router.get('/orders/:id', OrderController.getOrderById);

// Route to place a new order
router.post('/orders', OrderController.placeOrder);

module.exports = router;

