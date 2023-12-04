import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../services/restaurant';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching restaurants. Please try again.');
        console.error('RestaurantList error:', error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          {/* Add more restaurant details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;

