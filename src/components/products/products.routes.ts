import express from "express";
import { showProducts, createProduct } from "./products.controller";

const router = express.Router();

router.route("/products").get(showProducts).post(createProduct);

export default router;
