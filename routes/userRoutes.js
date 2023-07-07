import express from "express";
import { authentication } from "../middlewares/authentification.js";
import { auth } from "../middlewares/authorization.js";

import {
  allUsers,
  showAUser,
  createAccount,
  loginUser,
  logoutUser,
} from "../controllers/userCtrl.js";
const router = express.Router();

router.get("/", allUsers);
router.get("/:email", showAUser);
router.post("/", createAccount);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
