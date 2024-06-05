import mongoose from "mongoose";

const UserReview = new mongoose.Schema(
  {
    name: String,
    company: String,
    model: String,
    desc: String,
    rating: String,
  },
  {
    timestamps: true,
  }
);

export const UserReviews =  mongoose.models.UserReview || mongoose.model("UserReview", UserReview);