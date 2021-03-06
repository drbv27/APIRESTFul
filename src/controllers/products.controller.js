import Product from "../models/Product";

export const createProduct = async (req, res) => {
  /* console.log(req.body); */
  const { name, category, priceCOP, priceUSD, cantidad, deterioro } = req.body;

  const newProduct = new Product({
    name,
    category,
    priceCOP,
    priceUSD,
    cantidad,
    deterioro,
  });

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  /* res.json("get products by controller"); */
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  res.status(204).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
