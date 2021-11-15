import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productsRoutes from "./routes/products.routes";

const app = express();

app.set("pkg", pkg);

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  /* console.log("welcome"); */
  /* res.json("welcome"); */
  /*   res.json({
    author: "drbv27",
    descripcion: "API REST",
    version: "1.0.0",
  }); */
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    descripcion: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/products", productsRoutes);

export default app;
