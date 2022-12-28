import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    tenants: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
    }
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
