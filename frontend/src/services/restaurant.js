// Example function to fetch a list of restaurants
export const getRestaurants = async () => {
  try {
    const response = await fetch('http://localhost:3001/restaurants');

    if (!response.ok) {
      throw new Error('Error fetching restaurants');
    }

    const restaurants = await response.json();
    return restaurants;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

// Example function to fetch menu for a specific restaurant
export const getRestaurantMenu = async (restaurantId) => {
  try {
    const response = await fetch(`http://localhost:3001/restaurants/${restaurantId}/menu`);

    if (!response.ok) {
      throw new Error('Error fetching restaurant menu');
    }

    const menu = await response.json();
    return menu;
  } catch (error) {
    console.error('Error fetching restaurant menu:', error);
    throw error;
  }
};

// Add more functions as needed for restaurant-related tasks

