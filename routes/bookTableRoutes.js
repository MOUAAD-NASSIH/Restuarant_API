import express from "express";
import { createBooking } from "../controllers/bookTableCtrl.js";
const router = express.Router();

// book a table
router.post("/", createBooking);

export default router;
