const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
  {
    rating: [{
      type: Number,
      min: 1,
      max: 5
    }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, { timestamps: true }
);

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
