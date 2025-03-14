import React from "react";

function RecipeCard({ title, description, image }) {
  return (
    <div className="card recipe-card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
