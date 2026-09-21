import React, { useState, useEffect, useRef } from "react";
import "./OTP.css";

function OTP({ onVerify, onBack }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);

  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);
    setError("");

    // Move to next box
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    /*
      Temporary OTP verification.

      For development/testing:
      Any 6-digit OTP will be accepted.

      Later this will be connected to the backend
      and the actual OTP sent to the user's email/mobile.
    */

    setError("");
    onVerify();
  };

  const handleResend = () => {
    if (timer !== 0) return;

    setOtp(["", "", "", "", "", ""]);
    setError("");
    setTimer(30);

    inputRefs.current[0]?.focus();
  };

  return (
    <div className="otp-page">

      <div className="otp-card">

        {/* Logo */}
        <div className="otp-logo">
          Crave<span>Go</span>
        </div>

        {/* Icon */}
        <div className="otp-icon">
          ✉
        </div>

        <p className="otp-label">
          VERIFICATION
        </p>

        <h1>
          Verify Your Account
        </h1>

        <p className="otp-description">
          We've sent a 6-digit verification code to your
          registered email or mobile number.
        </p>

        <form onSubmit={handleVerify}>

          {/* OTP boxes */}
          <div className="otp-inputs">

            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
              />
            ))}

          </div>

          {error && (
            <p className="otp-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="verify-button"
          >
            Verify OTP
          </button>

        </form>

        {/* Resend */}
        <div className="resend-section">

          {timer > 0 ? (
            <p>
              Resend OTP in{" "}
              <span>00:{timer.toString().padStart(2, "0")}</span>
            </p>
          ) : (
            <p>
              Didn't receive the code?
              <button
                className="resend-button"
                onClick={handleResend}
              >
                Resend OTP
              </button>
            </p>
          )}

        </div>

        {/* Back */}
        <button
          className="otp-back"
          onClick={onBack}
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default OTP;