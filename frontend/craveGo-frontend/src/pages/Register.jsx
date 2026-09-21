import React, { useState } from "react";
import "./Register.css";

function Register({ onBack, onRegisterSuccess, onLogin }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    // Basic validation
    if (!name || !contact || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (contact.length !== 10) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      // Send registration data to backend
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            contact,
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      // Registration successful
      onRegisterSuccess();

    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Unable to connect to the server. Please make sure the backend is running."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          Crave<span>Go</span>
        </div>

        <p className="register-label">
          CREATE ACCOUNT
        </p>

        <h1>Join CraveGo</h1>

        <p className="register-description">
          Create your account and start discovering amazing food.
        </p>

        <form onSubmit={handleRegister}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Contact */}
          <div className="input-group">
            <label>Contact Number</label>

            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={contact}
              maxLength="10"
              onChange={(e) =>
                setContact(
                  e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email / User ID</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          {/* Error */}
          {error && (
            <p className="register-error">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="register-submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>

        <p className="login-text">
          Already have an account?

          <button
            type="button"
            className="login-link"
            onClick={onLogin}
          >
            Login
          </button>
        </p>

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default Register;