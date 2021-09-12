const { Schema, model } = require("mongoose");

const moodSchema = new Schema(
  {
    date: String, // si queremos que elijan fecha, sería esto o Date? INPUT TYPE DATE string tipo yyyy-mm-dd. y el día actual por defecto?
    rating: {
      type: Number,
      min: 1,
      max: 5
    }
  }, { timestamps: true }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
