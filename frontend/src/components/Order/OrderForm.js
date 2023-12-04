import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { placeOrder } from '../../services/order';
import DishCard from '../Restaurant/DishCard';

const OrderForm = () => {
  const history = useHistory();
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the list of available dishes (adjust the endpoint accordingly)
  useEffect(() => {
    // Sample fetch, replace with your actual API call
    const fetchDishes = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint for fetching dishes
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setSelectedDishes(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching dishes. Please try again.');
        console.error('OrderForm error:', error);
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  const handleOrder = async () => {
    // Example order data, adjust based on your requirements
    const orderData = {
      dishes: selectedDishes.map((dish) => ({ id: dish.id, quantity: 1 })),
      // Add more order details as needed
    };

    try {
      const order = await placeOrder(orderData);
      // Handle successful order placement (e.g., display confirmation, redirect, etc.)
      console.log('Order placed successfully:', order);
      history.push('/'); // Redirect to the home page after successful order placement
    } catch (error) {
      setError('Error placing order. Please try again.');
      console.error('OrderForm error:', error);
    }
  };

  return (
    <div>
      <h2>Place Your Order</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && selectedDishes.length === 0 && <p>No dishes available.</p>}
      {!loading && selectedDishes.length > 0 && (
        <div>
          {selectedDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
          <button onClick={handleOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
