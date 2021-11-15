import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    category: String,
    priceCOP: Number,
    priceUSD: Number,
    cantidad: Number,
    deterioro: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productsSchema);
