import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const MONGO_URI: string | any = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started and connected to database");
    });
  })
  .catch((err) => console.error(err));
