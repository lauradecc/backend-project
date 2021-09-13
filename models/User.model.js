const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { 
      type: String, 
      unique: true,
      required: true,
      default: 'Unknown'
    },
    name: {
      type: String,
      required: true,
      default: 'Unknown',
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      default: 'Unknown',
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'MODERATOR', 'ADMIN'],
      default: 'USER',
      required: true
    },
    active: {
      type: Boolean,
      default: true,
    }
  }, { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
