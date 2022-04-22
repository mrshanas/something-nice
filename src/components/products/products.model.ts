import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: [],
    },
  ],
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
export const Category = mongoose.model("Category", categorySchema);
