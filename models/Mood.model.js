const { Schema, model } = require("mongoose");

const moodSchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    allDay: {
      type: Boolean,
      required: true,
      default: true
    },
    display: {
      type: String,
      required: true,
      default: 'background'
    },
    color: { 
      type: String,
      required: true,
      default: '#ffffff'
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, { timestamps: true }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
