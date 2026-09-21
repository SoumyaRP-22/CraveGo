import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import sendOTP from "../utils/sendOTP.js";

const router = express.Router();

// ================================
// REGISTER USER
// ================================
router.post("/register", async (req, res) => {
  try {
    const { name, contact, email, password } = req.body;

    if (!name || !contact || !email || !password) {
      return res.status(400).json({
        message: "Please fill in all fields."
      });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email is already registered."
      });
    }

    const existingContact = await User.findOne({ contact });

    if (existingContact) {
      return res.status(400).json({
        message: "Contact number is already registered."
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // OTP valid for 5 minutes
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    const user = new User({
      name,
      contact,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false
    });

    await user.save();

    // Send OTP to email
    await sendOTP(email, otp);

    res.status(201).json({
      message: "Registration successful. OTP sent to your email.",
      userId: user._id
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Registration failed. Please try again."
    });
  }
});

export default router;