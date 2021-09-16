const { Schema, model } = require("mongoose");

const momentSchema = new Schema(
  {
    date: Date,
    phrase: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 200,
      trim: true
    },
    place: {
      type: Schema.Types.ObjectId,
      ref: 'Place'
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, { timestamps: true }
);

const Moment = model("Moment", momentSchema);

module.exports = Moment;
