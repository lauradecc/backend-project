const { Schema, model } = require("mongoose");

const moodSchema = new Schema(
  {
    date: Date,
    rating: {
      type: Number,
      min: 1,
      max: 5
    }
  }, { timestamps: true }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
