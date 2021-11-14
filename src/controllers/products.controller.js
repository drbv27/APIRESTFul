import Product from "../models/Product";

export const createProduct = (req, res) => {
  res.json("Creating Product");
};

export const getProducts = (req, res) => {
  res.json("get products by controller");
};

export const getProductById = (req, res) => {};

export const updateProductById = (req, res) => {};

export const deleteProductById = (req, res) => {};
