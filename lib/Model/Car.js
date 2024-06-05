import mongoose from "mongoose";

const CarModel = new mongoose.Schema(
  {
    name: String,
    price:Number
  },
  {
    timestamps: true,
  }
);

export const Car =  mongoose.models.CarModel || mongoose.model("CarModel", CarModel);