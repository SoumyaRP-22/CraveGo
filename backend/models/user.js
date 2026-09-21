import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    contact: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    otp: {
      type: String,
      default: null
    },

    otpExpiry: {
      type: Date,
      default: null
    },

    isVerified: {
      type: Boolean,
      default: false
    },

    address: {
      type: String,
      default: ""
    },

    location: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;