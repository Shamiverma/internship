import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURL);
    console.log(`Connected To Mongodb `)
  } catch (error) {
    console.log(`Mongodb Error`);
  }
};

export default connectDB;