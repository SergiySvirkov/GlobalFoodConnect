import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ order }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      {order ? (
        <div>
          <p>Order ID: {order.id}</p>
          <p>Total Amount: ${order.totalAmount}</p>
          <p>Ordered Dishes:</p>
          <ul>
            {order.dishes.map((dish) => (
              <li key={dish.id}>
                {dish.name} - Quantity: {dish.quantity} - Subtotal: ${dish.subtotal}
              </li>
            ))}
          </ul>
          <p>Order Status: {order.status}</p>
          {/* Add more order details as needed */}
        </div>
      ) : (
        <p>No order data available.</p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderSummary;

