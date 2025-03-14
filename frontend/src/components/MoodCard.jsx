import React from "react";

function MoodCard({ mood, description, image }) {
  return (
    <div className="card mood-card">
      <img src={image} alt={mood} className="card-image" />
      <h3>{mood}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MoodCard;
