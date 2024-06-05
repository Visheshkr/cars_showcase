import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    name: String,
    age:Number
  },
  {
    timestamps: true,
  }
);

export const User =  mongoose.models.UserModel || mongoose.model("User", UserModel);