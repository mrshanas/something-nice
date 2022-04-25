import express from "express";
import cors from "cors";
import productRoutes from "./components/products/products.routes";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Smartstore API",
    version: "1.0.0",
    description: "E-commerce backend api",
    contact: {
      name: "mrshanas",
      url: "https://mrshanas.com",
    },
    license: {
      name: "MIT",
      url: "https:github.com/mrshanas/smartstore-api/blob/master/LICENSE",
    },
  },

  servers: [
    {
      url: "http://localhost:3000/docs",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/app.ts", "./src/components/**/*.ts"],
};

const swaggerSpec = swaggerJsDoc(options);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api", productRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", async (req, res) => {
  res.send("Smartstore");
});

export default app;
