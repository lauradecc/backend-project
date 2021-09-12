const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    name: String,
    password: String,
    role: {
      type: String,
      enum: ['USER', 'MODERATOR', 'ADMIN'],
      default: 'USER',
    },
    active: {
      type: Boolean,
      default: true,
    },
    mood: {
      type: Schema.Types.ObjectId,
      ref: 'Mood'
    },
    moment: {
      type: Schema.Types.ObjectId,
      ref: 'Moment'
    },
    advice: {
      type: Schema.Types.ObjectId,
      ref: 'Advice'
    },
  }, { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
