import React from "react";

const HomePage = () => {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Welcome to Mood Food Generator</h1>
        <p>Feeling hungry? Find the perfect food for your mood!</p>
        <button className="get-started">Get Started</button>
      </header>

      {/* Mood Cards */}
      <div className="content">
        <div className="card">
          <div className="card-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
              alt="Happy"
              className="card-image"
            />
            <h3>Happy</h3>
          </div>
          <p>Feeling cheerful? Try something sweet!</p>
        </div>

        <div className="card">
          <div className="card-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/742/742760.png"
              alt="Sad"
              className="card-image"
            />
            <h3>Sad</h3>
          </div>
          <p>Need comfort food? Here's something warm.</p>
        </div>
      </div>

      {/* Recommended Recipes */}
      <h2 className="section-title">Recommended Recipes</h2>
      <div className="content">
        <div className="card">
          <div className="card-content">
            <img
              src="https://www.themealdb.com/images/media/meals/qptpvt1511635010.jpg"
              alt="Chocolate Cake"
              className="card-image"
            />
            <h3>Chocolate Cake</h3>
          </div>
          <p>A rich and moist dessert.</p>
        </div>

        <div className="card">
          <div className="card-content">
            <img
              src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
              alt="Spaghetti Carbonara"
              className="card-image"
            />
            <h3>Spaghetti Carbonara</h3>
          </div>
          <p>A creamy and cheesy delight.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
