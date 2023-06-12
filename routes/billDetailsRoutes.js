import express from "express";
import {
  getBillDetailsById,
  createBillDetails,
} from "../controllers/billDetailsCtrl.js";
const router = express.Router();

// book a table
router.get("/:id", getBillDetailsById);
router.post("/", createBillDetails);

export default router;
