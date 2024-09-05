// src/WelcomeScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/game"); // Navigate to the game page on click
  };
  return (
    <div className="welcome-container">
      <h1>Welcome to Our Game👋🏻!</h1>
      <p>
        We're glad to have you here.
        <br /> Explore our features and enjoy your stay.
      </p>
      <img src="/tic.jpg" alt="Welcome" className="welcome-image" />
      <button onClick={handleclick}>Get Started</button>
    </div>
  );
}

export default WelcomeScreen;
