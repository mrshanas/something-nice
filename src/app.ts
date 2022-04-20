import express from "express";
import cors from "cors";
import productRoutes from "./components/products/products.routes";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api", productRoutes);

app.get("/", async (req, res) => {
  res.send("Smartstore");
});

export default app;
