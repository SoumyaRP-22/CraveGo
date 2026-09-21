import React from "react";
import "./Welcome.css";

function Welcome({ onLogin, onRegister }) {
  return (
    <div className="welcome-page">

      <div className="welcome-logo">
        Crave<span>Go</span>
      </div>

      <div className="welcome-content">

        <p className="welcome-small-text">
          WELCOME TO CRAVEGO
        </p>

        <h1>
         <span className="pink-text">Food Delivery</span>
        <br />
        <span className="pink-text">Great Experiences</span>
       </h1>

        <p className="welcome-description">
          Discover delicious food, order your favourites
          and get your favourite meals delivered to your doorstep.      
        </p>

        <div className="auth-buttons">

          <button
            type="button"
            className="login-btn"
            onClick={onLogin}
          >
            Login
          </button>

          <button
            type="button"
            className="register-btn"
            onClick={onRegister}
          >
            Register
          </button>

        </div>

      </div>

      <div className="welcome-footer">
        Delicious food. Easy ordering. Better experiences.
      </div>

    </div>
  );
}

export default Welcome;