import express from "express";

import {
  showFoods,
  showFoodById,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/foodCtrl.js";
const router = express.Router();

router.get("/", showFoods);
router.get("/:id", showFoodById);
router.post("/", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
