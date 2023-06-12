import express from "express";
import { allUsers, showAUser, createAccount } from "../controllers/userCtrl.js";
const router = express.Router();

router.get("/", allUsers);
router.get("/:email", showAUser);
router.post("/", createAccount);

export default router;
