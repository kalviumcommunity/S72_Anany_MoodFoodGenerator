import React from "react";

function RestaurantCard({ name, cuisine, rating, image }) {
  return (
    <div className="card restaurant-card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}

export default RestaurantCard;
