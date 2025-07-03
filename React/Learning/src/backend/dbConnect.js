import mongoose from "mongoose";

const dbConnect = () => {
  mongoose.connect("mongodb+srv://shamiverma2307:shami2307@shami.khfjobe.mongodb.net/todo")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("error:", err);
    });
};

export default dbConnect;