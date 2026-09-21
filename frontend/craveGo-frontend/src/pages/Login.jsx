import React, { useState } from "react";
import "./Login.css";

function Login({ onBack, onLoginSuccess, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setError("");

    // Temporary OTP step
    onLoginSuccess();
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          Crave<span>Go</span>
        </div>

        <p className="login-label">WELCOME BACK</p>

        <h1>Login to CraveGo</h1>

        <p className="login-description">
          Login to discover delicious food and amazing dining experiences.
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email / User ID</label>

            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit" className="login-submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <button
            className="register-link"
            onClick={onRegister}
          >
            Register
          </button>
        </p>

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default Login;