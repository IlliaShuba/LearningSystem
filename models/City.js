import mongoose from "mongoose";
const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  hotels:
    [{type: mongoose.Schema.Types.ObjectId, ref: "Hotel"}],
});

export default mongoose.model("City", CitySchema)