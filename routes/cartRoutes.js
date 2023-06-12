import express from "express";
import {
  addItems,
  getItem,
  updateItem,
  allItems,
  deleteItem,
  deleteItems,
} from "../controllers/cartCtrl.js";
const router = express.Router();

// add to cart
router.post("/", addItems);
// get an item in cart
router.get("/:user_id/:food_id", getItem);
// get all items by user id
router.get("/:id", allItems);
// update item qty
router.put("/", updateItem);
// delete an item in cart
router.delete("/:user_id/:food_id", deleteItem);
// delete all items in cart by user id
router.delete("/:id", deleteItems);

export default router;
