import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Mood Food Generator</h1>
        <p>Discover the perfect meal based on your mood!</p>
        <button className="get-started">Get Started</button>
      </header>
      <section className="content">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </section>
      <footer>
        &copy; 2025 Mood Food Generator. All rights reserved.
      </footer>
    </div>
  );
}

export default App;