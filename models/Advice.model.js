const { Schema, model } = require("mongoose");

const adviceSchema = new Schema(
  {
    phrase: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 250,
      trim: true
    },
    rating: [{         // BONUS?
      type: Number,
      min: 1,
      max: 5
    }],
    hasBeenAccepted: {
      type: Boolean,
      default: null,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, { timestamps: true }
);

const Advice = model("Advice", adviceSchema);

module.exports = Advice;
