import mongoose from "mongoose";

export const connect = async () => {
  const MONGO_URI: string | any = process.env.MONGO_URI;
  return await mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));
};

export const disconnect = async () => {
  return await mongoose
    .disconnect()
    .then(() => console.log("Database disconnected"))
    .catch((err: Error) => console.error(err));
};
