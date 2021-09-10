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
    day: {  // separamos day (mood, rating?) y diario???
      type: Schema.Types.ObjectId,
      ref: 'Day'
    }
  }, { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
