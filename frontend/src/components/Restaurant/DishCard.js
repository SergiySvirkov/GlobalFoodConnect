import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>${dish.price}</p>
      {/* Add more dish details or actions as needed */}
    </div>
  );
};

export default DishCard;
