// src/WelcomeScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/game"); // Navigate to the game page on click
  };
  const handleRegister = () => {
    navigate("/register"); // Navigate to the game page on click
  };
  const formikhandleRegister = () => {
    navigate("/formikregister"); // Navigate to the game page on click
  };
  return (
    <div className="welcome-container">
      <h1>Welcome to Our Game👋🏻!</h1>
      <p>
        We're glad to have you here.
        <br /> Explore our features and enjoy your stay.
      </p>
      <img src="/tic.jpg" alt="Welcome" className="welcome-image" />
      <div className="button-container">
        <button className="head-button" onClick={handleclick}>
          Get Started
        </button>
        <button className="head-button" onClick={handleRegister}>
          Register
        </button>
        <button className="head-button" onClick={formikhandleRegister}>
          Formik-Register
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
