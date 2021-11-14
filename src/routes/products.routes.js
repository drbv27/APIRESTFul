import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";

/* import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controller"; */

/* router.get("/", (req, res) => {
  res.json("Getting products");
}); */
router.post("/", productsCtrl.createProduct);
router.get("/", productsCtrl.getProducts);
router.get("/:productId", productsCtrl.getProductById);
router.put("/:productId", productsCtrl.updateProductById);
router.delete("/:productId", productsCtrl.deleteProductById);

export default router;
