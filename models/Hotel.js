import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rooms:{
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "Room"}]
  },
});

export default mongoose.model("Hotel", HotelSchema)