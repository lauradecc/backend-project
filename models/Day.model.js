const { Schema, model } = require("mongoose");

const daySchema = new Schema(
  {
    date: Date,
    mood: {
      type: Number,
      min: 1,
      max: 5
    },
    phrase: String,
  }, { timestamps: true }
);

const Day = model("Day", userSchema);

module.exports = Day;
