import express from "express";
import controlProducts from "../controllers/controlProducts.js";
const router = express.Router();

router.get("/", controlProducts.getAll);
router.get("/:productsNo", controlProducts.getOne);
router.post("/", controlProducts.create);
router.patch("/:productsNo", controlProducts.update);
router.delete("/:productsNo", controlProducts.remove);

export default router;
