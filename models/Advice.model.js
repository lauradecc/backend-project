const { Schema, model } = require("mongoose");

const adviceSchema = new Schema(
  {
    phrase: String,
    rating: {         // BONUS?
      type: Number,
      min: 1,
      max: 5
    },
    hasBeenAccepted: {
      type: Boolean,
      default: false,
    },
    hasBeenRejected: {
      type: Boolean,
      default: false,
    }
  }, { timestamps: true }
);

const Advice = model("Advice", adviceSchema);

module.exports = Advice;
