import express from "express";
import {
  showProducts,
  createProduct,
  showProduct,
  showCategories,
  createCategory,
} from "./products.controller";

const router = express.Router();

router.route("/categories").get(showCategories).post(createCategory);

router.route("/products").get(showProducts).post(createProduct);
router.route("/product/:id").get(showProduct);

export default router;
