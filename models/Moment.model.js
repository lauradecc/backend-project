const { Schema, model } = require("mongoose");

const momentSchema = new Schema(
  {
    date: String, // si queremos que elijan fecha, sería esto o Date? INPUT TYPE DATE string tipo yyyy-mm-dd
    phrase: String,
    place: { // No tiene (pero puede) tener lugar. Si no se añade qué pasa?
      type: Schema.Types.ObjectId,
      ref: 'Place'
    }
  }, { timestamps: true }
);

const Moment = model("Moment", momentSchema);

module.exports = Moment;
