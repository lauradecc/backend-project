const { Schema, model } = require("mongoose");

const momentSchema = new Schema(
  {
    date: Date,
    phrase: String,
    place: { // No tiene (pero puede) tener lugar. Si no se añade qué pasa?
      type: Schema.Types.ObjectId,
      ref: 'Place'
    }
  }, { timestamps: true }
);

const Moment = model("Moment", momentSchema);

module.exports = Moment;
