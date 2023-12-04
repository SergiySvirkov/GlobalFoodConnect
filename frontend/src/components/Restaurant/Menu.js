import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantMenu } from '../../services/restaurant';

const Menu = () => {
  const { restaurantId } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getRestaurantMenu(restaurantId);
        setMenu(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching menu. Please try again.');
        console.error('Menu error:', error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return (
    <div>
      <h2>Menu</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {menu.map((menuItem) => (
        <div key={menuItem.id}>
          <h3>{menuItem.name}</h3>
          <p>{menuItem.description}</p>
          <p>${menuItem.price}</p>
          {/* Add more menu item details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Menu;

