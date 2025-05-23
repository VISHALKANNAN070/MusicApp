import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log("MongoDB not connected", err);
    });
};

export default connectDB;
