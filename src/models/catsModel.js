import { Schema, model } from "mongoose";

const CatsSchema = new Schema(
  {
    name: String,
    city: String,
    state: String,
    qtyFemale: String,
    qtyMale: String,
    phone: String,
    notes: String,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

export default model("CatsModel", CatsSchema);